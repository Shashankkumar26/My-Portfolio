import React from 'react';
import { useParams } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList'
import GitHub from '@mui/icons-material/GitHub';
import Tour from '@mui/icons-material/Tour';
import '../styles/ProjectDisplay.css'


const ProjectDisplay = () => {
   
        const {id}= useParams();
       
        const project=  ProjectList[id];
        const {Name, image, skills, Link1, Link2}= project;
        const visit = ()=>{
            window.open({visit})
        }

        return (<div className='project'>
            <h1>{Name}</h1>
            <img src={image} alt=""></img>
            <p>
                Skills : {skills}

            </p>
            <div className='iconicVisit'>
                <div className='visit'>
                <a href={Link1} target="_blank"><GitHub /></a>
                </div>
                <div className='visit'>
                <a href={Link2} target= "_blank"><Tour/></a>
                </div>
           
            
            </div>
            <p className='small'> Click us</p>
            
        </div>
        );
    
}
 
export default ProjectDisplay;