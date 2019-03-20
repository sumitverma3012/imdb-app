import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/actions';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    const { profile } = props;
    return (

        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Explore</NavLink></li>
            <li><NavLink to="/signin" onClick={props.signOut}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pulse pink lighten-1">{profile.name[0]}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);