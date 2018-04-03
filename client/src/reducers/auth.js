import SET_CURRENT_USER from 'actions/types'

const initialState = {
    isAuthenticated: false,
    userDetails: {}
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default: return state;
    }
}