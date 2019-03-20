import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { movieReview } from '../../store/actions/actions'

const MovieReview = (props) => {
    const { loggedIn } = props;

    const submitReview = () => {
        props.movieReview(props.currentItem);
        props.history.goBack();
    }

    const goBack = () => {
        props.history.goBack();
    }

    const ratingValueHandler = () => {
        
    }

    if (!loggedIn) {
        return <Redirect to='/signin'></Redirect>
    }
    return (
        <div className="container">
            <div className="card col m4 hoverable large card-main image-container-card">
                <div className="card-content">
                    <form action="#" className="col m4">
                        <div>
                            Rating:
                    </div>
                        <p className="range-field">
                            <input type="range" value="5" id="movierange" min="0" max="10" onChange={ratingValueHandler}/>
                        </p>
                        <div>
                            How likely you are to recommend the movie:
                        </div>
                        <br></br>
                        <div className="chip">Less</div>
                        <div className="chip">Very</div>
                        <div className="chip">Extremely</div>

                    </form>
                    <div className="card-action center">
                        <button onClick={submitReview} className='btn btn-primary movie--button'>Submit</button>
                        <button onClick={goBack} className='btn btn-default'>Back</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="container">
        //     <div className="row">
        // <form action="#" className="col m4">
        //     <p className="range-field">
        //         <input type="range" id="test5" min="0" max="10" />
        //     </p>
        //     <section>
        //         How likely you areto recommend the movie:

        //         <div className="chip">Less</div>
        //         <div className="chip">Very</div>
        //         <div className="chip">Extremely</div>
        //     </section>
        // </form>
        //     </div>
        // </div>
    )
}



const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        currentItem: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        movieReview: payload => dispatch(movieReview(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieReview);