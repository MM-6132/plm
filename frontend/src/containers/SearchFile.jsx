import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, Typography} from "@mui/material";
import {Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function SearchFile() {
    const navigate = useNavigate();
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
                <Typography variant="h2" >
                    All documents
                </Typography>
            </div>
            <div style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "1px 1px 1px black",
                margin: "1%",
                width: "90%",
                borderRadius: "10px",
                padding: "10px"
            }} className={"grid-duo"}>
                <div style={{display: "flex", flexDirection: "column", gap: "20px", margin:"20px"}}>
                    <Typography variant="h6" style={{textDecoration:"underline"}} >
                        File :
                    </Typography>
                    <Button variant="outlined">Category</Button>
                    <Button variant="outlined">Type de fichier</Button>
                    <Button variant="outlined">Versions</Button>
                    <Button variant="outlined">Etat</Button>
                    <Button variant="outlined">Phase de développement</Button>

                </div>
                <div style={{maxHeight:"620px", overflow:"hidden"}}>
                    <Typography variant="h6" style={{textDecoration:"underline"}} >
                        Aperçu :
                    </Typography>
                    <div style={{border: "2px solid black"}}>
                    <Document file="/Case Study 2023.pdf">
                        <Page pageNumber={1} />
                    </Document>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFile;