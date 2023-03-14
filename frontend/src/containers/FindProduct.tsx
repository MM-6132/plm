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
        field: "firstName",
        headerName: "First Name"
    },
    {
        field: "lastName",
        headerName: "Last Name"
    },
    {
        field: "age",
        headerName: "Age"
    }
];

// NOTE: Pulls in imported json data.
const rows = [
    {
        "id": 1,
        "firstName": "First Name 1",
        "lastName": "Last Name 1",
        "age": 1
    },
    {
        "id": 2,
        "firstName": "First Name 2",
        "lastName": "Last Name 2",
        "age": 2
    },
    {
        "id": 3,
        "firstName": "First Name 3",
        "lastName": "Last Name 3",
        "age": 3
    },
    {
        "id": 4,
        "firstName": "First Name 4",
        "lastName": "Last Name 4",
        "age": 4
    },
    {
        "id": 5,
        "firstName": "First Name 5",
        "lastName": "Last Name 5",
        "age": 5
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
                    width: "45%",
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

