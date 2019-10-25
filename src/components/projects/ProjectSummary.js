import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project, deleteProject}) => {


    return (
        <div className="card project-summary text-dark">
            <div className="card-body">
            <button className='' onClick={() => {deleteProject(project.id)}}>X</button>
                <h4 className="card-title">{project.title}</h4>
                <h6 className='card-subtitle'>{project.authorFirstName + ' ' + project.authorLastName} </h6>
                <p className="card-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}


export default ProjectSummary