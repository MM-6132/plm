import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

function CreateProduct() {
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
                <Typography variant="h2" gutterBottom>
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
                <div style={{display: "flex", flexDirection: "column", gap: "20px", margin:"20px"}}>
                    <Typography variant="h6" style={{textDecoration:"underline"}} >
                        New product:
                    </Typography>
                    <div>
                        <TextField
                            required
                            id="product_id"
                            label="Product ID"/>
                    </div>
                    <div>
                        <TextField
                            required
                            id="version"
                            label="Version"
                            defaultValue=""/>
                    </div>
                    <div>
                        <TextField
                            required
                            id="piece_type"
                            label="Type of piece"
                            defaultValue=""/>
                    </div>
                    <div>
                        <TextField
                            required
                            id="extern_reference"
                            label="Extern reference"
                            defaultValue=""/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px", margin:"20px"}}>
                    <div>
                        <Typography variant="h6" style={{textDecoration:"underline", marginBottom:"10px"}} >
                            Add to a project:
                        </Typography>
                        <TextField
                            required
                            id="extern_reference"
                            label="Extern reference"
                            defaultValue=""/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Typography variant="h6" style={{textDecoration:"underline"}} >
                            Add document :
                        </Typography>
                        <TextField
                            required
                            id="id_doc"
                            label="Id DOC"
                            defaultValue=""/>
                        <TextField
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
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Button style={{marginTop:"20px", width:"30%"}} onClick={() => navigate('/product')} variant="contained"  color="success">
                            Create product
                        </Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CreateProduct;