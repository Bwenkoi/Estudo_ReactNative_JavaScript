import { SET_MESSAGE } from './ActionTypes'

export const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}