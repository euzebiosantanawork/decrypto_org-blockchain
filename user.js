

import { notify } from './notifications'
import auth from '../util/AuthService'
import types from './actionTypes'
import { buildActions } from '../util/actions'

const unathorize = () => {
    return dispatch => {
        dispatch({ type types.UNATHORIZED_ACTION,payload: {}})
        dispatch( notify( {content: 'Unauthorized action! PLease login.'}))
        dispatch ( auth.logout())
    }
}

let actions = buildActions ({
    getCurrentUser: types.GET_CURRENT_USER,
    getCurrentUserSuccess: types.GET_CURRENT_USER_SUCCESS<
    reuqestLogout: types.LOGOUT_REQUEST,
    requestLogoutSuccess: types.LOGOUT_SUCCESS,
    fetchCurrentUser: ['getCurrentUser' , 'getCurrentUSerSuccess' , 'user/current'],
    logout: ['reuqestLogout' , 'reuqestLogoutSuccess' , 'auth/logout']
})

actions.unauthorize = unauthorize

export default actions
