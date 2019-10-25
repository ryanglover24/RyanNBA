import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn }from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }

    render() {
        const { authError, auth } = this.props;

        if (auth.uid) {return <Redirect to='/' />}
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="d-block align-items-left justify-content-start">
                    <h4 className="grey-text text-darken-3 sign-in-header">Login</h4>
                    <div className="form-group form">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handleChange} className='form-control'/>
                    </div>
                    <div className="form-group form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className="form-group form">
                        <button className="btn btn-primary sign-in-button">Login</button>
                    </div>
                    <div className="black-text center">
                        {authError ? <p>{authError}</p> : null }
                    </div>
                </form>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => {dispatch(signIn(credentials))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
