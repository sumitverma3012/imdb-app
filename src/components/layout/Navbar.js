import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';



const Navbar = (props) => {
    const { loggedIn, currentUser } = props;
    const links = loggedIn ? <SignedInLinks profile={currentUser}></SignedInLinks> : <SignedOutLinks></SignedOutLinks>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    <i className="material-icons prefix nav__link__image">theaters</i>
                    Cinema</Link>
                {links}
            </div>
        </nav>
    )
}



const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar);