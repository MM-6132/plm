import axios from "axios";
import mem from 'mem/dist';

const api = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
    headers: {
        Authorization: `Bearer `
    }
})

api.interceptors.request.use(
    async (config) => {
        const session = JSON.parse(sessionStorage.getItem("token"));
        if (session?.access_token) {
            config.headers.Authorization = `Bearer ${session.access_token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error?.config;
        if (error?.response?.status === 401 && !config?.sent) {
            //console.log("Interceptor")
            config.sent = true;
            //console.log("Inter")
            const result = await memoizedRefreshToken();
            //console.log("Inter 2")
            if (result?.access_token) {
                config.headers.Authorization = `Bearer ${result.access_token}`
            }

            return axios(config);
        }
        return Promise.reject(error);
    }
);

const refreshTokenFn = async () => {
    //console.log("Inter3")
    try {
        //console.log("inter4")
        const token = await JSON.parse(sessionStorage.getItem("token"));
        //console.log(token.refresh_token)
        const response = await api.post("/auth/refresh", {
            refreshToken: token.refresh_token,
        });
        console.log("no response")
        console.log(response)
        const { session } = response.data;
        if (!session?.access_token)
            sessionStorage.removeItem("token");
        sessionStorage.setItem("token", JSON.stringify(session));
        return session;
    } catch (error) {
        console.log(error)
        console.log("error")
        sessionStorage.removeItem("token");
    }
};
const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
    maxAge,
});
export default api;