import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

function Authorization() {
    const navigate = useNavigate();
    const [text, setText] = React.useState("Authorization");
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => index + 1);
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    const animatedText = text.slice(0, index);

    return (
        <div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/Authorization/")}>Authorization</span>
            </div>
            <div className="grid-duo">
                <div className="center-element">
                    <div className="window">
                        <p className="progressive-text">{animatedText}</p>
                    </div>
                </div>
                <div className="grid-quatro-line">
                    <div></div>
                    <div className="button-menu">
                        <PlayCircleIcon className="play-circle-icon"/>
                        <p>Modify</p>
                    </div>
                    <div className="button-menu" onClick={() => navigate("/permissionRequest")}>
                        <PlayCircleIcon className="play-circle-icon"/>
                        <p>Submission</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Authorization;