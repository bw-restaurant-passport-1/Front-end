import React from 'react';
import axios from 'axios';
//import axioswithauth after pull of mary push
import jwtDecode from 'jwt-decode';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  //return will return axioswithauth vs axios
  return axios
    .post('api end point here', state)
    .then(res => {
      const userInfo = jwtDecode('res.data.user.token or whatever named');
      console.log(userInfo);
      localStorage.setItem('token', res.data.user.token); // or whatever response is named on user object
      dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
    })
    .catch(err => console.log(err));
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signup = state => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('api endpoint here', state)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data); //whatever token obect key is on object
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data }); //whatever the token object key is
    })
    .catch(err => {
      console.log('err');
      dispatch({ type: SIGNUP_ERROR, payload: 'res.data ' }); //whatever error
    });
};
