import {createContext, useState} from "react";
import React from 'react'
const ProjectContext = createContext();

export function ProjectProvider({children}) {
    const [project, setProject] = useState([
        {
            "id": 1,
            "Project name": "Creation of a reference",
            "Reference project": "4041599739166",
            "Type": "Creation",
            "Description": "Creation of the reference RE_00HGO030",
            "Begin at": "25-08-2022",
            "End at": "01-01-2023"
        },
        {
            "id": 2,
            "Project name": "Modification of a reference",
            "Reference project": "4017952320257",
            "Type": "Modification",
            "Description": "Modification of the reference RE_00CH040",
            "Begin at": "23-03-2023",
            "End at": "23-11-2022"
        },
        {
            "id": 3,
            "Project name": "Modification of a reference",
            "Reference project": "4041596707182",
            "Type": "Modification",
            "Description": "Modification of the reference RE_00HGO010",
            "Begin at": "30-11-2022",
            "End at": "12-10-2022"
        },
        {
            "id": 4,
            "Project name": "Deletion of a reference",
            "Reference project": "4041377351432",
            "Type": "Deletion",
            "Description": "Deletion of the reference RE_00CH030",
            "Begin at": "05-07-2022",
            "End at": "16-02-2023"
        },
        {
            "id": 5,
            "Project name": "Modification of a reference",
            "Reference project": "4041377947838426",
            "Type": "Modification",
            "Description": "Modification of the reference RE_00HGO050",
            "Begin at": "01-03-2023",
            "End at": "11-10-2022"
        },
        {
            "id": 6,
            "Project name": "Deletion of a reference",
            "Reference project": "4017956443671967",
            "Type": "Deletion",
            "Description": "Deletion of the reference RE_00CH020",
            "Begin at": "23-03-2023",
            "End at": "07-01-2023"
        },
        {
            "id": 7,
            "Project name": "Modification of a reference",
            "Reference project": "4867143141697799",
            "Type": "Modification",
            "Description": "Modification of the reference RE_00CH000",
            "Begin at": "11-11-2022",
            "End at": "09-11-2022"
        },
        {
            "id": 8,
            "Project name": "Creation of a reference",
            "Reference project": "4934379924805410",
            "Type": "Creation",
            "Description": "Creation of the reference RE_00CH040",
            "Begin at": "30-11-2022",
            "End at": "02-02-2023"
        },
        {
            "id": 9,
            "Project name": "Deletion of a reference",
            "Reference project": "4017958438871",
            "Type": "Deletion",
            "Description": "Deletion of the reference RE_00HGO000",
            "Begin at": "22-03-2023",
            "End at": "30-10-2022"
        },
        {
            "id": 10,
            "Project name": "Modification of a reference",
            "Reference project": "4017958105109765",
            "Type": "Modification",
            "Description": "Modification of the reference RE_00CH010",
            "Begin at": "17-08-2022",
            "End at": "15-03-2023"
        }
    ])
    const addtoProject = (project) => {
        setProject((prevState) => [...prevState, {project}]);
    };

    return (
        <ProjectContext.Provider value={{project, addtoProject}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContext;