import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useNavigate} from "react-router-dom";
import React from "react";
function NavBar() {
    const navigate = useNavigate();
    return (
        <div id="nav-bar">
            <KeyboardReturnIcon onClick={() => navigate(-1)} className="nav-bar-icon"/>
            <HomeIcon onClick={() => navigate('/accueil')} className="nav-bar-icon"/>
            <ExitToAppIcon onClick={() => navigate('/')} className="nav-bar-icon"/>

        </div>
    );
}

export default NavBar;