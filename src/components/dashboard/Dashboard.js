import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MovieItem from '../movies/MovieItem';
import Notification from '../widgets/Notification';
class Dashboard extends Component {
    render() {
        const { loggedIn } = this.props;
        if (!loggedIn) {
            return <Redirect to='/signin'></Redirect>
        }
        let movieList;
        if (this.props.reviewedList && this.props.reviewedList.length) {
            movieList = this.props.reviewedList.map((item, i) => <MovieItem key={i} data={item} />);
        } else {
            movieList = <Notification error="No movies reviewed yet!"></Notification>
        }
        return (
            <div className="dashboard center container">
                <div className="row">
                <br></br>
                    <div className="col m12 s12">
                        {movieList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        reviewedList: state.reviewedList
    }
}

export default connect(mapStateToProps)(Dashboard);