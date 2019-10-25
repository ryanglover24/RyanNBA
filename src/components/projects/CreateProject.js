import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');

    }

    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) {return <Redirect to ='/signin' />}
        return (
            <div className="container-fluid justify-content-center">
                <div className="col-10">
                <form onSubmit={this.handleSubmit} className="white">
                    <h3 className="">Create New Project</h3>
                    <div className="form-group form">
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" className='form-control' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="content">Project Content</label>
                            <textarea id="content" onChange={this.handleChange}  className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="input-field">
                        <button className="btn btn-danger">Create</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {dispatch(createProject(project))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)