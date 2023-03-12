import api from "./InitializingAxios";

export function createUser(tgi, password, job, email, role){

}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};
export function getUsersNames(){
    return api.get("/user/names").then((data) => {
        return data.data
    }).catch(function(error){
        return error;
    })
}
export function getUserRoleAndJob(){
    return api.get(`/user/job-role/${sessionStorage.getItem("tgi")}`).then((data) => {
        return data.data
    }).catch(function(error){
        return error;
    })
}
export function login(credential){
    return api.post("/auth/signin", credential).then((data) => {
        data.data.parser = parseJwt(data.data.access_token)
        return data.data
    }).catch(function(error){
        return error;
    });
}