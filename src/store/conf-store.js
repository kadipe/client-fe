import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from '../reducer'

export default function confStore() {
    return createStore(
        allReducers, 
        applyMiddleware(thunk)
    );
}