import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

function Accueil() {
    const navigate = useNavigate();
    const [text, setText] = React.useState("Bonjour, Lucas Bechoua");
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => index + 1);
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    const animatedText = text.slice(0, index);

    return (
        <div className="grid-duo">
            <div className="center-element">
                <div className="window">
                    <p className="progressive-text">{animatedText}</p>
                </div>
            </div>
            <div className="grid-quatro-line">
                <div></div>
                <div className="button-menu" onClick={() => navigate("/product")}>
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Product</p>
                </div>
                <div className="button-menu" onClick={() => navigate("/project")}>
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Project</p>
                </div>
                <div className="button-menu" onClick={() => navigate("/authorization")}>
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Authorization</p>
                </div>
            </div>
            <div className="breadcrumbs">
                <a href="/accueil">Home</a>
            </div>

        </div>
    );
}

export default Accueil;