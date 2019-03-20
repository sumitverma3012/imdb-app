import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/actions';
import Notification from '../widgets/Notification';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        contact: '',
        address: ''
    }

    submitUserDetails = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
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
                    <h5 className="grey-text text-darken-3">Register</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" required id="name" onChange={this.inputValueChanged}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" required id="email" onChange={this.inputValueChanged}></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="contact">Contact</label>
                        <input type="text" id="contact" onChange={this.inputValueChanged}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.inputValueChanged}></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" onChange={this.inputValueChanged}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn lighten-1 z-depth-2">Register</button>
                    </div>
                    <div className="center red-text text-darken-3">
                    {authError ? <Notification error='Please enter valid data.'></Notification> : null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authError,
        loggedIn: state.loggedIn
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);; 