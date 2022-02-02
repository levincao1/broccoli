/*
 * @Author: levin
 * @Date: 2022-02-02 11:42:14
 * @LastEditTime: 2022-02-02 17:36:14
 * @LastEditors: Please set LastEditors
 * @Description: App reducer
 * @FilePath: /broccoli/src/redux/modules/app.js
 */
import Immutable from 'immutable';

const initalState = Immutable.fromJS({
    requestQuantity: 0,
    isInvite: false,
    error: null
});

// action types
export const types = {
    START_REQUEST: 'APP/START_REQUEST',
    FINISH_REQUEST: 'APP/FINISH_REQUEST',
    SET_ERROR: 'APP/SET_ERROR',
    REMOVE_ERROR: 'APP/REMOVE_ERROR',
    SHOW_INVITE: 'APP/SHOW_INVITE',
    CLOSE_INVITE: 'APP/CLOSE_INVITE'
};

// action creators
export const actions = {
    startRequest: () => ({
        type: types.START_REQUEST
    }),
    finishRequest: () => ({
        type: types.FINISH_REQUEST
    }),
    setError: error => ({
        type: types.SET_ERROR,
        error
    }),
    removeError: () => ({
        type: types.REMOVE_ERROR
    }),
    showInvite: (isInvite) => ({
        type: types.SHOW_INVITE,
        isInvite
    })
}

// reducers
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.START_REQUEST:
            return state.merge({ requestQuantity: state.get('requestQuantity') + 1});
        case types.FINISH_REQUEST:
            return state.merge({ requestQuantity: state.get('requestQuantity') - 1});
        case types.SET_ERROR:
            return state.merge({ error: action.error });
        case types.REMOVE_ERROR:
            return state.merge({ error: null });
        case types.SHOW_INVITE:
            return state.merge({ isInvite: action.isInvite});
        case types.CLOSE_INVITE:
            return state.merge({ isInvite: false});
        default:
            return state;
    }
};
export default reducer;

// selectors
export const getError = state => {
    return state.getIn(['app', 'error']);
}
export const getShowInvite = state => {
    return state.getIn(['app', 'isInvite']);
}

export const getRequestQuantity = state => {
    return state.getIn(['app', 'requestQuantity']);
}

