import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {

    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks /> ;

    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid list-group list-group-horizontal">
               <Link to='/' className="navbar-brand">RyanNBA</Link>
               
               {auth.isLoaded && links}
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    console.log('this is the navbar state', state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)