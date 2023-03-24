import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container, createTheme,
    CssBaseline,
    FormControlLabel, Grid, Link,
    TextField,
    ThemeProvider, Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useState} from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                PLM, Aurore, Lucas, Julie, Mickaël
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Login = () => {
    const navigate = useNavigate();
    const theme = createTheme();
    const [users, setUsers] = useState([
        {password:"azerty", username:"Lucas"},
        {password:"azerty", username:"Mickael"},
        {password:"azerty", username:"Julie"},
        {password:"azerty", username:"Aurore"},
        {password:"nzuzi", username:"Jose"}
    ])
    const [credentials,setCredentials] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
        users.map((u) => {
            if(u.password === data.get('password') && u.username === data.get('username')){
                sessionStorage.setItem("username", data.get('username'))
                navigate('/accueil')
            }

        })
        setCredentials(true)
    };
    return (
        <div className="Home">
            <img src="./logo192.png" className="app-logo" alt="logo"/>
            <p>
                Product Life Management
            </p>
            <ThemeProvider theme={theme}>
                <Container style={{backgroundColor: "white", borderRadius: "10px", color: "black"}} component="main"
                           maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h6">
                            Sign in
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            {credentials &&
                            <p style={{color:"red", fontSize:"15px"}}>*Username or password incorrect</p>}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="text"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="success"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 1, mb: 1}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 4, mb: 2}}/>
                </Container>
            </ThemeProvider>

        </div>
    )
}