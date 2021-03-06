import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { saveState, loadState } from './store/utility/localStorage';

const serializedState = loadState();
const store = createStore(
    rootReducer,
    serializedState,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

store.subscribe(() => {
    saveState(store.getState())
})

serviceWorker.unregister();
