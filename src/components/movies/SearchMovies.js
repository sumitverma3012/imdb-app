import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getMovieList } from '../../store/actions/actions';



class SearchForm extends Component {
    state = {
        search: ''
    }

    search = (e) => {
        e.preventDefault();
        if (this.state.search.length !== 0) {
            this.props.props.history.push(`/movies?q=${this.state.search}`);
            if (this.props.caller === 'list-page') this.props.getMovieList({ q: this.state.search, page: 1 });
        }
    }

    inputValueChanged = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { loggedIn } = this.props;
        if (!loggedIn) {
            return <Redirect to='/signin'></Redirect>
        }
        return (
            <div className='row'>
                <form onSubmit={this.search} className="col s12">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input id="search" type="text" onChange={this.inputValueChanged} />
                        <label htmlFor="search">Enter Movie Title</label>
                    </div>
                    <button className="waves-effect waves-light btn-small">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);