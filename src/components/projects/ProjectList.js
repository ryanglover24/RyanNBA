import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { auth } from 'firebase';

const ProjectList = ({projects, deleteProject, auth}) => {

    
    

    return (
        <div className="project-list section">
            { projects ? projects.map(project => {
                if (project.authorId == auth.uid) {
                return (
                    <div key={project.id} >
                        <div className="card project-summary d-flex">
                             <div className="card-body">
                                <div className="card-title list-group list-group-horizontal">
                                    <h4 className="text-primary">{project.title}</h4>
                                    <button className='btn btn-sm text-danger flex-fill justify-content-end'
                                    onClick={() => {deleteProject(project.id)}}>X</button>
                                </div>
                                <Link to={'/project/' + project.id} className='text-success'>
                                    <h6 className='card-subtitle'>{project.authorFirstName + ' ' + project.authorLastName} </h6>
                                    <p className="card-text">{moment(project.createdAt.toDate()).calendar()}</p>
                                 </Link>
                            </div>     
                        </div> 
                    </div>
                    )
                } else {
                    return (
                        <div key={project.id} >
                        <div className="card project-summary d-flex">
                             <div className="card-body">
                                <div className="card-title list-group list-group-horizontal">
                                    <h4 className="text-primary">{project.title}</h4>
                                </div>
                                <Link to={'/project/' + project.id} className='text-success'>
                                    <h6 className='card-subtitle'>{project.authorFirstName + ' ' + project.authorLastName} </h6>
                                    <p className="card-text">{moment(project.createdAt.toDate()).calendar()}</p>
                                 </Link>
                            </div>     
                        </div> 
                    </div>
                    )
                }
                }): (
                    
                        <div className="spinner-border" role='status'>
                            No projects
                        </div>
                    )  
            }
        </div>
    )
}


export default ProjectList