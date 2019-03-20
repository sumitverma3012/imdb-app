import {environment} from '../utility/environment';

export const API_URL = environment.REACT_APP_OMDB_API;
export const API_KEY = environment.REACT_APP_OMDB_SECRET;
export const API_KEY_QUERY_STRING = 'apikey';

export const START_FETCHING = 'START_FETCHING';
export const SET_PAGE = 'SET_PAGE';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';
export const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS';
export const MOVIE_REVIEW = 'MOVIE_REVIEW';