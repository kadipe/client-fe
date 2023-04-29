import { VALIDATE_CODE } from '../action/action-types'

export function validateCode(state = {}, action) {
    switch (action.type) {
        case VALIDATE_CODE:
            return action.checkCode;
        default:
            return state;
    }
}
