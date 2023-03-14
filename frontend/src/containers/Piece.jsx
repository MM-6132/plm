import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from "react";
import {useNavigate} from "react-router-dom";

function Piece() {
    const navigate = useNavigate();
    return (
        <div className="grid-duo">
            <div className="center-element">
                <div className="window">
                    <img style={{width:"90%", height:"90%", borderRadius: "5px"}}
                         src="https://imgs.search.brave.com/eJIaVbxh4_WSIopD7omQwHw4uNYxaAHMV8UEdRr73rA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/bXVsdGktbWVjYS5j/b20vcmVzc291cmNl/cy9pbWFnZXMvNjJl/MmIyOTU2ZmVkLmpw/Zw"
                         alt="Grapefruit slice atop a pile of other slices"/>
                </div>
            </div>
            <div className="grid-quatro-line">
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder conception</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder design</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder production</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>MRO</p>
                </div>
                <div className="button-menu" onClick={() => navigate('/searchFile')}>
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>All documents</p>
                </div>
            </div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/Product/")}>Product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/piece/")}>Find a product</span>
            </div>

        </div>
    );
}

export default Piece;