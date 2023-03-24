import {useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import ProjectContext from "../ProjectContext";

function CreateProject() {
    const navigate = useNavigate();
    const {addtoProject, project} = useContext(ProjectContext)
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState();
    const [date,setDate] = useState();
    const [reference, setReference] = useState();
    const [type, setType] = useState()
    function handleOnSubmit() {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        addtoProject({
            "id": project.length + 1,
            "Project name": projectName,
            "Reference Project": reference,
            "Type": type,
            "Description": description,
            "Begin at": formattedToday,
            "End at": dd + '/' + mm + '/' + (yyyy+1),
        })
        navigate('/project')
    }

    const handleChangeTypeProject = (event: SelectChangeEvent) => {
        setType(event.target.value)
    };
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
                            onChange={(e) => setProjectName(e.target.value)}
                            id="project_name"
                            label="Name of project"/>
                    </div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChangeTypeProject}
                            label="Piece type">
                            <MenuItem value="Creation">Creation</MenuItem>
                            <MenuItem value="Modification">Modification</MenuItem>
                            <MenuItem value="Deletion">Deletion</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <TextField
                            fullWidth
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            label="Description"
                            defaultValue=""/>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            onChange={(e) => setReference(e.target.value)}
                            id="reference"
                            label="Reference"/>
                    </div>
                    <div>
                        <input id="date" type="date" onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop:400}}>
                    <Button style={{marginTop: "20px", width: "30%"}} onClick={handleOnSubmit}
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