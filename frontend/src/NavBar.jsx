import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function NavBar() {
    return (
        <div id="nav-bar">
            <KeyboardReturnIcon className="nav-bar-icon"/>
            <HomeIcon className="nav-bar-icon"/>
            <ExitToAppIcon className="nav-bar-icon"/>
        </div>
    );
}

export default NavBar;