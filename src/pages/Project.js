import React from 'react';
import Projectitem from '../components/Projectitem';
import {ProjectList} from '../helpers/ProjectList'
import '../styles/Project.css'
const Project = () => {
    return (  
     <div className='projects'>
        <h1> My Personal Projects</h1>

        <div className="projectList">
            {ProjectList.map((project,idx)=>{
                return <Projectitem id={idx} name= {project.name} key={project.key} image={project.image} />
            })}
        </div>
     </div>
    );
}
 
export default Project;
