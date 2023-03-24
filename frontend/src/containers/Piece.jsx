import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import BuildIcon from "@mui/icons-material/Build";
import {Button} from "@mui/material";

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
                <span onClick={() => navigate("/findProduct/")}>Find a product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/piece/")}>Piece</span>
            </div>
            <div className="grid-duo75" style={{marginTop:"100px"}}>
                <div className="center-element">
                    <div className="window">
                        <img style={{width: "90%", height: "90%", borderRadius: "5px"}}
                             src={img}
                             alt="Grapefruit slice atop a pile of other slices"/>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px"
                }}>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} className="hover105">
                        <div className="divProjectPartIcon">
                            <img src="/innovation-svgrepo-com.svg" alt="" className="projectPartIcon"/>
                        </div>
                        <Button size="large" style={{backgroundColor: "white"}} variant="outlined">Conception</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} className="hover105">
                        <div className="divProjectPartIcon">
                            <img src="/design-svgrepo-com.svg" alt="" className="projectPartIcon"/>
                        </div>
                        <Button size="large" style={{backgroundColor: "white"}} variant="outlined">Design</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} className="hover105">
                        <div className="divProjectPartIcon">
                            <img src="/recognition-svgrepo-com.svg" alt="" className="projectPartIcon"/>
                        </div>
                        <Button size="large"  style={{backgroundColor: "white"}} variant="outlined">Realization</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} className="hover105">
                        <div className="divProjectPartIcon">
                            <BuildIcon className="projectPartIcon"></BuildIcon>
                        </div>
                        <Button style={{backgroundColor: "white"}} size="large" variant="outlined">MRO</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} className="hover105">
                        <div className="divProjectPartIcon">
                            <img src="/documents-svgrepo-com.svg" alt="" className="projectPartIcon"/>
                        </div>
                        <Button style={{backgroundColor: "white"}} size="large" variant="outlined" onClick={() => navigate('/SearchFile')}>All docs</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Piece;