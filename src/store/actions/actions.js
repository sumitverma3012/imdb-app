import {
    API_URL, API_KEY, API_KEY_QUERY_STRING,SIGNOUT_USER_SUCCESS, MOVIE_REVIEW,
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST, SET_MOVIE_DETAIL, SIGNUP_USER_FAILURE, SIGNUP_USER_SUCCESS, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE
} from '../utility/constants';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const getMovieList = (payload) => {
    
    return dispatch => {
        dispatch({ type: START_FETCHING });
        dispatch({ type: SET_PAGE, payload: payload.page });
        return fetch(`${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&s=${payload.q}&page=${payload.page}`)
            .then(result => result.json())
            .then(items => {
                dispatch({ type: SET_MOVIE_LIST, payload: items });
            });
    };
};
export const getMovieDetail = (payload) => {
    return dispatch => {
        dispatch({ type: START_FETCHING });
        return fetch(`${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&i=${payload}&plot=full&r=json`)
            .then(result => result.json())
            .then(item => {
                dispatch({ type: SET_MOVIE_DETAIL, payload: item });
            });
    };
};

export const signUp = (newUser) => {
    const userDetails = JSON.parse(localStorage.getItem('state'));
    if (userDetails && userDetails.users && userDetails.users.filter(user => user.email === newUser.email).length > 0) {
        return { type: SIGNUP_USER_FAILURE, payload: newUser };
    } else {
        history.push('/');
        return { type: SIGNUP_USER_SUCCESS, payload: newUser };
    }
}

export const signIn = (user) => {
    const userDetails = JSON.parse(localStorage.getItem('state'));
    const currentUser = (userDetails && userDetails.users) ? userDetails.users.find(item => item.email === user.email && item.password === user.password) : null;
    if (currentUser) {
        history.push('/');
        return { type: SIGNIN_USER_SUCCESS, payload: currentUser };
    } else {
        return { type: SIGNIN_USER_FAILURE };
    }
}


export const signOut = () => {
    history.push('/signin');
    return { type: SIGNOUT_USER_SUCCESS };
}


export const movieReview = (payload) => {
return {type: MOVIE_REVIEW, payload: payload}
}