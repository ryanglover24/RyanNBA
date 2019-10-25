import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteProject } from '../../store/actions/projectActions'
import DashboardContent from './DashboardContent'
import Carousel from './Carousel'
import Form from './Form'


class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.deleteProject = this.deleteProject.bind(this);
// }
// deleteProject(id) {
//     //console.log("Project to delete", id);
//     this.props.deleteProject(id);        
// }
  
  
  
  
  
  render() {
  
    // console.log(this.props);
    const { projects, auth, notifications, deleteProject, FavTeam } = this.props;
    
    if (auth.isLoaded && !auth.uid) {return <Redirect to={'/signin'} />}


    return (
      <div className="dashboard container-fluid">
          <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="previous-title">Previous Games</h1>
                </div>
            </div>    
        </div>
          
        
        <div className="row">
          <div className="col-12 col-lg-12 col-xl-8">
            <DashboardContent FavTeam={FavTeam} auth={auth}/>
          </div>
          <div className="col-12 col-lg-6 col-xl-2">
            <ProjectList projects={projects} deleteProject={deleteProject} auth={auth}/>
          </div>
          <div className="col-12 col-lg-6 col-xl-2 ">
            <Notifications notifications={notifications}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8">
            <Carousel />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    FavTeam: state.firestore.ordered.FavTeam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => {dispatch(deleteProject(projectId))}
  }
}

export default compose(
  firestoreConnect((props) => [{collection:'projects', limit:5, orderBy: ['createdAt', 'desc']},
  {collection:'notifications', limit: 5, orderBy: ['time', 'desc']},
  {collection: 'FavTeam', }]), // sync todos collection from Firestore into redux
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)

