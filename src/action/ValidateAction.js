import { VALIDATE_CODE } from './ActionTypes'

export const validateCode = (code) => ({
    type: VALIDATE_CODE,
    checkCode: code
})