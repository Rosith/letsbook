import * as actionType from './actionTypes';

export const loginUserSuccess = (payload) => ({
    type: actionType.AUTH_USER,
    payload
})

export const loginUser = (data) => {
    return async dispatch => {
        const  user= 
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@cognizant.com'
            }
        
        dispatch(loginUserSuccess(user));
    }
}
