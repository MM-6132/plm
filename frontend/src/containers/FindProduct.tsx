import {useNavigate} from "react-router-dom";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {Button, Typography} from "@mui/material";

const columns = [
    {
        field: "id",
        headerName: "ID",
        sortable: false,
        hide: true
    },
    {
        field: "Version",
        headerName: "Version"
    },
    {
        field: "Product name",
        headerName: "Product name"
    },
    {
        field: "Reference",
        headerName: "Reference"
    },
    {
        field: "Description",
        headerName: "Description"
    },
    {
        field: "Added on",
        headerName: "Added on"
    },
    {
        field: "Modified on",
        headerName: "Modified on"
    }
];

// NOTE: Pulls in imported json data.
const rows = [
    {
        "id": 1,
        "Version" : 2,
        "Product name": "Cylinder Head",
        "Reference": "RE_00CH000",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 2,
        "Version" : 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH010",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder blockwith a modification of 2 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 3,
        "Version" : 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH020",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 2 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 4,
        "Version" : 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH030",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 3 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 5,
        "Version" : 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH040",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 4 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 6,
        "Version" : 2,
        "Product name": "Modified cylinder Head",
        "Reference": "RE_00CH050",
        "Description": "A component of an internal combustion engine that sits above the cylinders on top of the cylinder block with a modification of 5 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 7,
        "Version" : 2,
        "Product name": "Head gasket",
        "Reference": "RE_00HGO000",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 8,
        "Version" : 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO010",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 1 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 9,
        "Version" : 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO020",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 2 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 10,
        "Version" : 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO030",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 3 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 11,
        "Version" : 2,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO040",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 4 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    },
    {
        "id": 12,
        "Version" : 4,
        "Product name": "Modified head gasket",
        "Reference": "RE_00HGO050",
        "Description": "A gasket that sits between the engine block and cylinder head in an internal combustion engine with a modification of 5 millimeters.",
        "Added on" : "2021-01-01",
        "Modified on" : "2022-01-01"
    }
]
export default function FindProduct() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [selection, setSelection] = useState<GridRowSelectionModel>([]);
    console.log(selection)
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
                    <Typography variant="h2" gutterBottom>
                        Find a product
                    </Typography>
                </div>
                <div style={{position:"initial"}}>
                    <input style={{position:"relative", height:"50px", marginLeft:"30px", marginTop:"25px", width:"300%", borderRadius:"10px"}} type="text" placeholder="Recherche ..."/>
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
                            rows={rows}
                            columns={columns}
                            checkboxSelection
                            onRowSelectionModelChange={setSelection}
                            {...rows}
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
                    <Button variant="outlined" size="large" style={{backgroundColor: "white"}} onClick={() => {if(selection.length > 0) navigate('/piece/?id='+selection[0]); else alert("Selectionner un produit !")}}>
                        Détails
                    </Button>
                    <Button variant="outlined" size="large" style={{backgroundColor: "white"}}  onClick={() => {if(selection.length > 0) navigate('/piece/?id='+selection[0]); else alert("Selectionner un produit !")}}>
                        Modifier
                    </Button>
                </div>
            </div>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/Product/")}>Product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/findProduct/")}>Find a product</span>
            </div>

        </div>
    );
}

