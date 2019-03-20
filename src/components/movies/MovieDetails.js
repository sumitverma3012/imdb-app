import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { connect } from "react-redux";
import { getMovieDetail } from '../../store/actions/actions';


class MovieDetails extends Component {
    image() {
        if (!this.props.item.Poster || this.props.item.Poster !== 'N/A') {
            return <img src={this.props.item.Poster} className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    goBack = () => {
        this.props.history.goBack();
    }
    componentDidMount = () => {
        this.props.getMovieDetail(this.props.match.params.imdbID);
    }

    movieReview = () => {
        this.props.history.push('/moviereview')
    }
    render() {
        return (
            <div className="container">
                <div className="col s12 m7">
                    <br></br>
                    <div className="card horizontal">
                        <div className="card-image">
                            {this.image()}
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className="card-block">
                                    <h4 className="card-title">{this.props.item.Title}</h4>
                                    <p className="card-text card-meta">Released: {this.props.item.Year}, Type: {this.props.item.Type}</p>

                                    <strong>Plot</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Plot}</p>

                                    <strong>Genre</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Genre}</p>

                                    <strong>Director</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Director}</p>

                                    <strong>Actors</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Actors}</p>

                                    <strong>IMDB Rating</strong>
                                    <hr />
                                    <p className="card-text"><a href={`https://www.imdb.com/title/${this.props.item.imdbID}/`} target="_blank">{this.props.item.imdbRating}</a> ({this.props.item.imdbVotes} Votes)</p>

                                    <strong>Runtime</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Runtime}</p>

                                    <strong>Rated</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Rated}</p>

                                    <strong>Date Released</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Released}</p>

                                    <strong>Country (Language)</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Country} ({this.props.item.Language})</p>

                                    <strong>Production</strong>
                                    <hr />
                                    <p className="card-text">{this.props.item.Production}</p>
                                </div>

                            </div>
                            <div className="read-more">

                            </div>
                            <div className="card-action">
                                <button className='btn btn-default movie--button' onClick={this.movieReview}>Review</button>
                                <button onClick={this.goBack} className='btn btn-default'>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { item: state.item };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: payload => dispatch(getMovieDetail(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);;