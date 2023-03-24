import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

function CreateProject() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    return (
        <div>
            <div style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "1px 1px 1px black",
                margin: "2%",
                width: "40%",
                borderRadius: "10px",
                padding: "10px"
            }}>
                <Typography variant="h2">
                    Create a project
                </Typography>
            </div>
            <div style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "1px 1px 1px black",
                margin: "1%",
                width: "70%",
                borderRadius: "10px",
                padding: "10px"
            }} className={"grid-duo"}>
                <div style={{display: "flex", flexDirection: "column", gap: "20px", margin: "20px"}}>
                    <Typography variant="h6" style={{textDecoration: "underline"}}>
                        New project:
                    </Typography>
                    <div>
                        <TextField
                            fullWidth
                            required
                            id="project_name"
                            label="Name of project"/>
                    </div>
                    <div>
                        <TextField
                            required
                            fullWidth
                            id="id_project"
                            label="Id project"
                            defaultValue=""/>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            id="description"
                            label="Description"
                            defaultValue=""/>
                    </div>
                    <div>
                        <input id="date" type="date"/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop:300}}>
                    <Button style={{marginTop: "20px", width: "30%"}} onClick={() => navigate('/project')}
                            variant="contained" color="success">
                        Create project
                    </Button>
                </div>

            </div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/project/")}>Project</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/createProject/")}>Create a project</span>
            </div>

        </div>
    );
}

export default CreateProject;