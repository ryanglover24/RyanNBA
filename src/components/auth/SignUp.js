import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signUp(this.state);
    }

    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {return <Redirect to='/' />}
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4 className="sign-up-header">Sign Up</h4>
                    <div className="form form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className="form form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className="form form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className="form form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className="form">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div className="center red-text">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {dispatch(signUp(newUser))}
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
