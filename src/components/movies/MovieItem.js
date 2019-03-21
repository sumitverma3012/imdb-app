import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MovieItem extends Component {
    image() {
        if (!this.props.data.Poster || this.props.data.Poster !== 'N/A') {
            return <img src={this.props.data.Poster} className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="card col m4 hoverable large card-main image-container-card">
                <div className="card-image waves-effect waves-block waves-light movieitem__image">
                    {this.image()}

                </div>
                <div className="card-content">
                    <span className="card-title">{this.props.data.Title}</span>
                    <p className="card-text">Released: {this.props.data.Year}, Type: {this.props.data.Type}</p>
                    <div className="card-action">
                        <Link to={`/detail/${this.props.data.imdbID}`} className='btn btn-primary'>Read more</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default MovieItem;