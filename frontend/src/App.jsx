import './App.css';
import {Login} from "./containers/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Piece from "./containers/Piece";
import NavBar from "./NavBar";
import Accueil from "./containers/Accueil";
import Product from "./containers/Product";
import Authorization from "./containers/Authorization";
import CreateProduct from "./containers/CreateProduct";
import FindProduct from "./containers/FindProduct";
import SearchFile from "./containers/SearchFile";
import FindProject from "./containers/FindProject";
import Project from "./containers/Project";
import PermissionRequest from "./containers/PermissionRequest";
import ProjectPart from "./containers/ProjectPart";
import CreateProject from "./containers/CreateProject";
import React, {useContext} from "react";
import ProductContext from "./ProductContext"
function App() {
    const {product} = useContext(ProductContext)
    console.log(product)
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/accueil' element={<><NavBar/><Accueil/></>}/>
                        <Route path='/piece' element={<><NavBar/><Piece/></>}/>
                        <Route path='/product' element={<><NavBar/><Product/></>}/>
                        <Route path='/authorization' element={<><NavBar/><Authorization/></>}/>
                        <Route path='/createProduct' element={<><NavBar/><CreateProduct/></>}/>
                        <Route path='/createProject' element={<><NavBar/><CreateProject/></>}/>
                        <Route path='/findProduct' element={<><NavBar/><FindProduct/></>}/>
                        <Route path='/findProject' element={<><NavBar/><FindProject/></>}/>
                        <Route path='/permissionRequest' element={<><NavBar/><PermissionRequest/></>}/>
                        <Route path='/projectPart' element={<><NavBar/><ProjectPart/></>}/>
                        <Route path='/searchFile' element={<><NavBar/><SearchFile/></>}/>
                        <Route path='/project' element={<><NavBar/><Project/></>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;