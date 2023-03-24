import {createContext, useState} from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {
    const [product, setProduct] = useState([
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
    ])

    const addToProduct = (product) => {
        setProduct((prevState) => [...prevState, product]);
    };

    // @ts-ignore
    return (
        <ProductContext.Provider value={{ product, addToProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;