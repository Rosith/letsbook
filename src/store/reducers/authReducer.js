import * as types from '../actions/actionTypes';
const InitialState = {
    authenticate :false,
    me:null,   
}

 const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {...state,authenticated :true, me: action.payload };
        case types.LOGOUT_USER:
            return {InitialState};
        default:
            return state;
    }
}

export default authReducer;