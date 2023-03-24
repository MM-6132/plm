import {useNavigate} from "react-router-dom";
import {DataGrid, GridRowSelectionModel} from "@mui/x-data-grid";
import React, {useContext, useState} from "react";
// @ts-ignore
import ProductContext from "../ProductContext.js"
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
import UserIcon from "@mui/icons-material/Person";

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
export default function FindProduct() {
    const navigate = useNavigate();
    // @ts-ignore
    const {product} = useContext(ProductContext);

    const [selection, setSelection] = useState<GridRowSelectionModel>([]);
    const [array, setArray] = useState([...product])
    const [open, setOpen] = React.useState(false);
    function filterArray(e:any, column:any) {
        if(e === ""){
            setArray([...product]);
            return;
        }
        let filter = [];
        for (let i = 0; i < product.length; i++){
            // @ts-ignore
            if(product[i][column].includes(e))
                filter.push(product[i])
        }
        // @ts-ignore
        setArray([...filter]);
    }
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        if(selection.length > 0)
            setOpen(true);
        else
            window.alert("Please select a product")
    }
    function productArray() {
        // @ts-ignore
        let renderer = [];
        renderer.push(<p style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", fontWeight:"bold", marginLeft:"30px",  marginRight:"30px"}}><span>ID</span> | <span>Reference</span> | <span>Version</span></p>)
        renderer.push(<div style={{height:"1px", backgroundColor:"black"}}></div>)
        if(selectForModal["Version"] === 2)
            renderer.push(<p onClick={() => navigate('/piece/?id='+selectForModal["id"])} style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", marginLeft:"30px",  marginRight:"30px"}} className="grey-hover"><span>13</span> | <span>{selectForModal["Reference"]}</span> | <span>1</span></p>)
        // @ts-ignore
        return renderer;
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
                        Find a product
                    </Typography>
                </div>
                <div style={{position:"initial"}}>
                    <input onChange={(e) => filterArray(e.target.value, "Product name")} style={{position:"relative", height:"50px", marginLeft:"30px", marginTop:"25px", width:"300%", borderRadius:"10px"}} type="text" placeholder="Search ..."/>
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
                    <Button variant="outlined" size="large" style={{backgroundColor: "white"}}  onClick={() => {if(selection.length > 0) navigate('/piece/?id='+selection[0]); else alert("Selectionner un produit !")}}>
                        Modify
                    </Button>
                </div>
            </div>

            <div className="breadcrumbs">
                <span onClick={() => navigate("/accueil")}>Home</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/product/")}>Product</span>
                <span className="separator">›</span>
                <span onClick={() => navigate("/findProduct/")}>Find a product</span>
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
                        {productArray()}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

