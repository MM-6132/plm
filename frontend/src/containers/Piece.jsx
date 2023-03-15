import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Piece() {
    const navigate = useNavigate();
    const [img, setImg] = useState();
    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        let id = parseInt(queryParameters.get("id"))
        if(id === 1)
            setImg("/Cylinder-Head.png")
        else if(id <= 6)
            setImg("/Head-Gasket.png")
        else if (id === 7)
            setImg("/Cylinder-Head.png")
        else
            setImg("/Cylinder-Head.png")
    }, [])
    return (
        <div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/product/")}>Product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/piece/")}>Find a product</span>
            </div>
            <div className="grid-duo">
                <div className="center-element">
                    <div className="window">
                        <img style={{width: "90%", height: "90%", borderRadius: "5px"}}
                             src={img}
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


            </div>

        </div>
    );
}

export default Piece;