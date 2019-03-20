import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMovieList } from '../../store/actions/actions';
import MovieItem from './MovieItem';
import SearchMovies from './SearchMovies';
import Pagination from '../widgets/Pagination';

class MoviesList extends Component {
    componentDidMount() {
        if (this.props.location.search.length !== 0) {
            let searchData = this.props.location.search.replace('?q=', '');
            this.props.getMovieList({ q: searchData, page: this.props.page });
        }
    }

    render() {
        let movieList;
        if (this.props.items.Search) {
            movieList = this.props.items.Search.map((item, i) => <MovieItem key={i} data={item} />);
        } else {
            movieList = <div className="alert alert-info" role="alert">Not Found!</div>
        }
        return (
            <div className="container center">
                <div className="row search-form movie-list">
                    <SearchMovies props={this.props} colClass={''} caller={'list-page'} />
                </div>
                <div className="row">
                    <div className="col m12 s12">
                        {movieList}
                   </div>
                </div>

                <Pagination q={this.props.location.search} page={this.props.page} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { page: state.page, items: state.items };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);;