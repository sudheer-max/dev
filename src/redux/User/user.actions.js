import userTypes from "./user.types";



export const emailLoginStart = userCredentials => ({
    type: userTypes.EMAIL_LOGIN_START,
    payload : userCredentials
});

export const loginSuccess = user => ({
    type: userTypes.LOGIN_SUCCESS,
    payload: user
});


export const userAuthSession = () => ({
    type: userTypes.USER_AUTH_SESSION
});


export const logoutStart = () => ({
    type: userTypes.LOGOUT_START
});

export const logoutSuccess = () => ({
    type: userTypes.LOGOUT_SUCCESS
});


export const registerUserStart = userCredentials => ({
    type: userTypes.REGISTER_USER_START,
    payload: userCredentials
});


export const registerError = err => ({
    type: userTypes.REGISTER_ERROR,
    payload: err
});


export const resetPasswordStart = userCredentials => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: userCredentials
});


export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
});


export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
});


export const googleLoginStart = () => ({
    type: userTypes.GOOGLE_LOGIN_START
});


