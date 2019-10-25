import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

        console.log('signed in links', props);

    return (
        <ul className="list-group list-group-horizontal flex-row list-unstyled ">
            <li><NavLink to='/create' className="btn btn-info">New Project</NavLink></li>
            <li class="nav-item dropdown">
                <a className="dropdown-toggle btn btn-success" data-toggle="dropdown"
                href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Leaders</a>
                <div class="dropdown-menu">
                    <li><NavLink to='/points' className='btn'>Points</NavLink></li>
                    <li><NavLink to='/assists' className='btn'>Assists</NavLink></li>
                    <li><NavLink to='/blocks' className='btn'>Blocks</NavLink></li>
                </div>
            </li>
            
            <li><a onClick={props.signOut} className="btn btn-primary text-white">Log Out</a></li>
            <li><NavLink to='/' className="badge badge-primary badge-pill">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )

}

const mapStateToProps = (state) => {
    console.log('mapping state', state)
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {dispatch(signOut())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)