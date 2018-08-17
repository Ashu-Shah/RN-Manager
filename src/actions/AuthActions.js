import { Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = text => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = text => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const loginUser = ({ email, password }) => {
    Keyboard.dismiss();
    const firebase = require('firebase');
    return (dispatch) => {
        if(email && password) {
            dispatch({type: LOGIN_USER});
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => loginUserSuccess(dispatch, user))
                        .catch(error => loginUserFail(dispatch, error))
                });
        }
        else {
            let error = {message: 'Please enter an email & password'};
            loginUserFail(dispatch, error);
        }
    };
};

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message
    })
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};