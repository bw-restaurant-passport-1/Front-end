import React from 'react';
// import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import jwtDecode from 'jwt-decode';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  //return will return axioswithauth vs axios
  return axiosWithAuth()
    .post('/api/users/login', state)
    .then(res => {
      console.log(res);
      const userInfo = jwtDecode(res.data.token);
      console.log(userInfo);
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object
      dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
    })
    .catch(err => console.log(err));
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signup = state => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post('/api/users/register', state)
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
export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_ERROR = 'FETCH_RESTAURANT_ERROR';

export const fetchRestaurant = state => dispatch => {
  dispatch({type: FETCH_RESTAURANT_START});
  return axiosWithAuth()
  .get('/api/restaurants', state)
  .then(res => {
    console.log('get', res)
    localStorage.setItem('token', res.data);
    dispatch({type: FETCH_RESTAURANT_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('err', err.response);
    dispatch({type: FETCH_RESTAURANT_ERROR, payload: 'res.data'});
  })
}

export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';
export const addRestaurant = state => dispatch => {

}

export const UPDATE_RESTAURANT_START = 'UPDATE_RESTAURANT_START';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const UPDATE_RESTAURANT_ERROR = 'UPDATE_RESTAURANT_ERROR';
export const updateRestaurant = state => dispatch => {
  
}