import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProductProvider} from "./ProductContext";
import {ProjectProvider} from "./ProjectContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProjectProvider>
        <ProductProvider>
            <App/>
        </ProductProvider>
    </ProjectProvider>
);

