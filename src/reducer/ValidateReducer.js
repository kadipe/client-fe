import { VALIDATE_CODE } from '../action/ActionTypes'

export function validateCode(state = {}, action) {
    switch (action.type) {
        case VALIDATE_CODE:
            return action.checkCode;
        default:
            return state;
    }
}
