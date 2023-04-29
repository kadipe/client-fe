import { combineReducers } from 'redux'

import { validateCode } from './validate-reducer';

export const allReducers = combineReducers({
    validateCode: validateCode
});