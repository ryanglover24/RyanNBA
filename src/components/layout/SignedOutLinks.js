import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {



    return (
        <ul className="list-group list-group-horizontal flex-row list-unstyled">
            <li><NavLink to='/signup' className="btn btn-info" >Signup</NavLink></li>
            <li><NavLink to='/signin' className="btn btn-info" >Login</NavLink></li>
        </ul>
    )

}

export default SignedOutLinks