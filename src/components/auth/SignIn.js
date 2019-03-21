import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/actions'
import { connect } from 'react-redux';
import Notification from '../widgets/Notification';
class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    submitUserDetails = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    inputValueChanged = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { loggedIn, authError } = this.props;
        if(loggedIn) {
            return <Redirect to='/'></Redirect>
        }
        return (
            <div className="container">
                <form onSubmit={this.submitUserDetails} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" onChange={this.inputValueChanged}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input required type="password" id="password" onChange={this.inputValueChanged}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn lighten-1 z-depth-2">Login</button>
                    </div>
                    <div className="center red-text text-darken-3">
                        {authError ? <Notification error='Please enter a valid email or password'></Notification> : null}
                    </div>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authError,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 