import {
	START_FETCHING, SET_PAGE, MOVIE_REVIEW, SET_MOVIE_LIST, SIGNOUT_USER_SUCCESS, SIGNUP_USER_FAILURE, SET_MOVIE_DETAIL, SIGNUP_USER_SUCCESS, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE
} from '../utility/constants';

const initialState = {
	items: { Search: [], totalResults: 0 },
	page: 1,
	item: {},
	isLoading: false,
	authError: false,
	users: [],
	loggedIn: false,
	currentUser: {},
	reviewedList: [],
	q: '',
};
const rootReducer = (state = initialState, action) => {
	if (action.type === SET_MOVIE_LIST) {
		return {
			...state,
			items: action.payload,
			isLoading: false
		};
	}

	if (action.type === SET_MOVIE_DETAIL) {
		return {
			...state,
			item: action.payload,
			isLoading: false
		};
	}

	if (action.type === START_FETCHING) {
		return {
			...state,
			isLoading: true
		};
	}

	if (action.type === SET_PAGE) {
		return {
			...state,
			page: action.payload
		};
	}

	if (action.type === SIGNUP_USER_SUCCESS) {
		return {
			...state,
			users: [...state.users, action.payload],
			loggedIn: true,
			authError: false,
			currentUser: action.payload
		}
	}

	if (action.type === SIGNUP_USER_FAILURE) {
		return {
			...state,
			loggedIn: false,
			authError: true
		}
	}


	if (action.type === SIGNIN_USER_SUCCESS) {
		return {
			...state,
			loggedIn: true,
			authError: false,
			currentUser: action.payload
		}
	}

	if (action.type === SIGNIN_USER_FAILURE) {
		return {
			...state,
			loggedIn: false,
			authError: true
		}
	}

	if (action.type === SIGNOUT_USER_SUCCESS) {
		return {
			...state,
			loggedIn: false,
			authError: false,
			currentUser: {}
		}
	}

	if (action.type === MOVIE_REVIEW) {
		return {
			...state,
			reviewedList: [...state.reviewedList, action.payload]
		}
	}
	return state;
}
export default rootReducer;