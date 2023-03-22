import {useNavigate} from "react-router-dom";
import {DataGrid, GridRowSelectionModel} from "@mui/x-data-grid";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import UserIcon from '@mui/icons-material/Person';

import {
    Backdrop,
    Box,
    Button,
    Fade,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Modal,
    Typography
} from "@mui/material";

const columns = [
    {
        field: "id",
        headerName: "ID",
        sortable: false,
        hide: true
    },
    {
        field: "Version",
        headerName: "Version",
        width: 150,
    },
    {
        field: "Product name",
        headerName: "Product name",
        width: 200,
    },
    {
        field: "Reference",
        headerName: "Reference",
        width: 150,
    },
    {
        field: "Description",
        headerName: "Description",
        width: 550,
    },
    {
        field: "Added on",
        headerName: "Added on",
        width: 150,
    },
    {
        field: "Modified on",
        headerName: "Modified on",
        width: 150,
    }
];

// NOTE: Pulls in imported json data.
const rows = [
    {
        "id": 1,
        "Version": 2,
        "Product name": "Cylinder Head",
        "Reference": "RE_00CH000",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 2,
        "Version": 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH010",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder blockwith a modification of 2 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 3,
        "Version": 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH020",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 2 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 4,
        "Version": 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH030",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 3 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 5,
        "Version": 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH040",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 4 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 6,
        "Version": 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH050",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 5 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 7,
        "Version": 2,
        "Product name": "Head gasket",
        "Reference": "RE_00HGO000",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 8,
        "Version": 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO010",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 1 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 9,
        "Version": 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO020",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 2 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 10,
        "Version": 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO030",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 3 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 11,
        "Version": 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO040",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 4 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    },
    {
        "id": 12,
        "Version": 4,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO050",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 5 millimeters.",
        "Added on": "2021-01-01",
        "Modified on": "2022-01-01"
    }
]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 2000,
    borderRadius: "20px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
export default function FindProject() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [selection, setSelection] = useState<GridRowSelectionModel>([1]);
    const [array, setArray] = useState([...rows])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        console.log(selection.length)
        if(selection.length > 0)
            setOpen(true);
        else
            window.alert("Please select a product")
    }
    const handleClose = () => setOpen(false);

    function filterArray(e: any, column: any) {
        if (e === "") {
            setArray([...rows]);
            return;
        }
        let filter = [];
        for (let i = 0; i < rows.length; i++) {
            // @ts-ignore
            if (rows[i][column].includes(e))
                filter.push(rows[i])
        }
        // @ts-ignore
        setArray([...filter]);
    }

    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    console.log(selection[0])
    // @ts-ignore
    let selectForModal = selection[0] !== undefined ? array[selection[0] - 1] : array[0]

    return (
        <div>
            <div style={{
                display: "flex",
                margin: "2%",
            }}>
                <div style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "40%",
                    boxShadow: "1px 1px 1px black",
                    borderRadius: "10px",
                    padding: "10px"
                }}>
                    <Typography variant="h2">
                        Find a project
                    </Typography>
                </div>
                <div style={{position: "initial"}}>
                    <input onChange={(e) => filterArray(e.target.value, "Product name")} style={{
                        position: "relative",
                        height: "50px",
                        marginLeft: "30px",
                        marginTop: "25px",
                        width: "300%",
                        borderRadius: "10px"
                    }} type="text" placeholder="Recherche ..."/>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: "1px 1px 1px black",
                    margin: "1%",
                    width: "75%",
                    borderRadius: "10px",
                }}>
                    <div style={{height: 600, width: '100%'}}>
                        <DataGrid
                            rows={array}
                            columns={columns}
                            checkboxSelection
                            onRowSelectionModelChange={setSelection}
                            {...array}
                        />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "20%",
                    marginBottom: "100px",
                    justifyContent: "flex-end"
                }}>
                    <Button variant="outlined" size="large" style={{backgroundColor: "white"}} onClick={handleOpen}>
                        Details
                    </Button>
                </div>
            </div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/project/")}>Project</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/findProject")}>Find a project</span>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition

                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className={"grid-duo75"}>
                            <div style={{display: "flex", flexDirection: "column", gap: "60px", margin: "20px"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <Typography variant="h6" style={{textDecoration: "underline", width: "300px"}}>
                                        Name of project :
                                    </Typography>
                                    <Typography variant="h6">
                                        {selectForModal["Product name"]}
                                    </Typography>
                                </div>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <Typography variant="h6" style={{textDecoration: "underline", width: "300px"}}>
                                        Id of project :
                                    </Typography>
                                    <Typography variant="h6">
                                        {selectForModal["id"]}
                                    </Typography>
                                </div>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <Typography variant="h6" style={{textDecoration: "underline", width: "300px"}}>
                                        Description :
                                    </Typography>
                                    <Typography variant="h6">
                                        {selectForModal["Description"]}
                                    </Typography>
                                </div>
                            </div>
                            <div style={{
                                marginLeft: "auto",
                                marginTop:"auto",
                                marginBottom:"auto"
                            }}>
                                <Typography variant="h6" style={{textDecoration: "underline", width: "300px"}}>
                                    Member of project :
                                </Typography>
                                <List sx={{width: '100%', maxWidth: 500, bgcolor: 'background.paper'}}>
                                    {["Mickael", "Lucas", "Aurore", "Julie"].map((value, i) => {
                                        const labelId = `checkbox-list-label-${i}`;
                                        return (
                                            <ListItem
                                                key={value}
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="comments">
                                                        <UserIcon/>
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
                                                    <ListItemText id={labelId} primary={`${value}`}/>
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </div>
                        </div>
                        <Button style={{position:"fixed",right: "30px", bottom: "20px"}} variant="contained" onClick={() => navigate('/projectPart/?name='+ selectForModal["Product name"]) }>Show project</Button>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
}

