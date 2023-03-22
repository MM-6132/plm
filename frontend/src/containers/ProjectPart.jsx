import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, Typography} from "@mui/material";
import BuildIcon from '@mui/icons-material/Build';

export default function ProjectPart() {
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    return (
        <div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/project")}>Project</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/findProject")}>Find a project</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/project")}>Project part</span>
            </div>
            <div>
                <div style={{
                    display: "flex",
                    margin: "2%",
                }}>
                    <div style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "95%",
                        textAlign:"center",
                        boxShadow: "1px 1px 1px black",
                        borderRadius: "10px",
                        padding: "10px"
                    }}>
                        <Typography variant="h2">
                            {queryParameters.get("name")}
                        </Typography>
                    </div>
                </div>
            </div>
            <div style={{
                display: "flex",
                marginTop: "100px",
                alignItems: "center",
                justifyContent: "center",
                gap: "100px"
            }}>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div className="divProjectPartIcon">
                        <BuildIcon className="projectPartIcon"></BuildIcon>
                    </div>
                    <Button size="large" style={{backgroundColor: "white"}} variant="outlined">Conception</Button>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div className="divProjectPartIcon">
                        <BuildIcon className="projectPartIcon"></BuildIcon>
                    </div>
                    <Button size="large" style={{backgroundColor: "white"}} variant="outlined">Design</Button>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div className="divProjectPartIcon">
                        <BuildIcon className="projectPartIcon"></BuildIcon>
                    </div>
                    <Button size="large"  style={{backgroundColor: "white"}} variant="outlined">Realization</Button>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div className="divProjectPartIcon">
                        <BuildIcon className="projectPartIcon"></BuildIcon>
                    </div>
                    <Button style={{backgroundColor: "white"}} size="large" variant="outlined">MRO</Button>
                </div>

            </div>
        </div>
    );
}
