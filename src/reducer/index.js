import { combineReducers } from 'redux'

import { validateCode } from './ValidateReducer';

export const allReducers = combineReducers({
    validateCode: validateCode
});