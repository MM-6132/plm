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
import ProductContext from "../ProductContext";

function CreateProduct() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("")
    const [version, setVersion] = useState("")
    const [reference, setReference] = useState("")
    const [idProject, setIdProject] = useState()
    const [description, setDescription] = useState();
    const {addToProduct, product} = useContext(ProductContext)
    const handleChangeProductName = (event: SelectChangeEvent) => {
        setProductName(event.target.value)
    };

    function handleOnSubmit() {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        addToProduct({
            "id": product.length+1,
            "Version": version,
            "Product name": productName,
            "Reference": reference,
            "Description": description,
            "Added on": formattedToday,
            "Modified on": formattedToday,
            "Project id": idProject,
        })
        navigate('/product')
    }

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
                    Create a product
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
                        New product:
                    </Typography>
                    <div>
                        <TextField fullWidth
                                   onChange={(e) => setVersion(e.target.value)}
                                   required
                                   id="version"
                                   label="Version"
                                   defaultValue=""/>
                    </div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Piece type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={productName}
                            onChange={handleChangeProductName}
                            label="Piece type">
                            <MenuItem value="Cylinder Head">Cylinder Head</MenuItem>
                            <MenuItem value="Modified cylinder Head">Modified cylinder Head</MenuItem>
                            <MenuItem value="Head gasket">Head gasket</MenuItem>
                            <MenuItem value="Modified head gasket">Modified head gasket</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <TextField fullWidth
                                   onChange={(e) => setReference(e.target.value)}
                                   required
                                   id="extern_reference"
                                   label="Extern reference"
                                   defaultValue=""/>
                    </div>

                    <div>
                        <TextField fullWidth
                                   onChange={(e) => setDescription(e.target.value)}
                                   required
                                   id="description"
                                   label="Description"
                                   defaultValue=""/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px", margin: "20px"}}>
                    <div>
                        <Typography variant="h6" style={{textDecoration: "underline", marginBottom: "10px"}}>
                            Add to a project:
                        </Typography>
                        <TextField
                            required
                            id="id_project"
                            label="id project"
                            defaultValue=""/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Typography variant="h6" style={{textDecoration: "underline"}}>
                            Add document :
                        </Typography>
                        <TextField
                            onChange={(e) => setIdProject(e.target.value)}
                            required
                            id="title"
                            label="Title"
                            defaultValue=""/>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <Button style={{marginTop: "20px", width: "30%"}} onClick={handleOnSubmit}
                                    variant="contained" color="success">
                                Create product
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/product/")}>Product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/createProduct/")}>Create a product</span>
            </div>

        </div>
    );
}

export default CreateProduct;