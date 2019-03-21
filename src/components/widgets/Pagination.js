import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { getMovieList } from '../../store/actions/actions';



class Pagination extends Component {
    prevClick = () => {
        let searchData = this.props.q.replace('?q=','');
        this.props.getMovieList({ q: searchData, page: Number(this.props.page) - 1 });
    }

    nextClick = () =>{
        let searchData = this.props.q.replace('?q=','');
        this.props.getMovieList({ q: searchData, page: Number(this.props.page) + 1 });
    }

    render() {
        return (
            <div>
                {this.props.items.totalResults > 10 &&
                    <div className="row">
                        <nav className="row">
                            {Number(this.props.page) > 1 ? <Link to={`/movies?q=${this.props.q}&page=${Number(this.props.page) - 1}`} className="btn btn-sm btn-primary" onClick={this.prevClick.bind(this)}>Previous</Link> : null}
                            <Link to={`/movies?q=${this.props.q}&page=${Number(this.props.page) + 1}`} className="btn btn-sm btn-primary" onClick={this.nextClick.bind(this)}>Next</Link>
                        </nav>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { items: state.items, page: state.page };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);;
