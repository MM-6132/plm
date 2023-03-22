import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

function Project() {
    const navigate = useNavigate();
    const [text, setText] = React.useState("Quel projet recherchez-vous ?");
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
                <span onClick={() => navigate("/project")}>Project</span>
            </div>
            <div className="grid-duo">
                <div className="center-element">
                    <div className="window">
                        <p className="progressive-text">{animatedText}</p>
                    </div>
                </div>
                <div className="grid-quatro-line">
                    <div></div>
                    <div className="button-menu" onClick={() => navigate("/findProject")}>
                        <PlayCircleIcon className="play-circle-icon"/>
                        <p>Find a project</p>
                    </div>
                    <div className="button-menu" onClick={() => navigate("/createProject")}>
                        <PlayCircleIcon className="play-circle-icon"/>
                        <p>Create a new project</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;