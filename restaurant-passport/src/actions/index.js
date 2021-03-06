import React from 'react';
 import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import jwtDecode from 'jwt-decode';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = state => dispatch => {
  dispatch({ type: LOGIN_START });
  //return will return axioswithauth vs axios
  return axios.post('https://restaurant-passport1.herokuapp.com/api/users/login', state)
    .then(res => {
      console.log(res);
      const userInfo = jwtDecode(res.data.token);
      const localUser = JSON.stringify(res.data);
      console.log(userInfo);
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object
      localStorage.setItem('user',localUser)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data,"login response")
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signup = state => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios.post('https://restaurant-passport1.herokuapp.com/api/users/register', state)
    .then(res => {
      console.log(res);
      const localUser = JSON.stringify(res.data);
      localStorage.setItem('token', res.data.token); //whatever token obect key is on object
      localStorage.setItem('user',localUser)
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data }); //whatever the token object key is
    })
    .catch(err => {
      console.log('err');
      dispatch({ type: SIGNUP_ERROR, payload: err }); //whatever error
    });
};
export const FETCHALL_RESTAURANT_START = 'FETCHALL_RESTAURANT_START';
export const FETCHALL_RESTAURANT_SUCCESS = 'FETCHALL_RESTAURANT_SUCCESS';
export const FETCHALL_RESTAURANT_ERROR = 'FETCHALL_RESTAURANT_ERROR';

export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_ERROR = 'FETCH_RESTAURANT_ERROR';

export const FETCH_RESTAURANTID_START = 'FETCH_RESTAURANTID_START';
export const FETCH_RESTAURANTID_SUCCESS = 'FETCH_RESTAURANTID_SUCCESS';
export const FETCH_RESTAURANTID_ERROR = 'FETCH_RESTAURANTID_ERROR';

export const FETCH_ALLREVIEWS_START = 'FETCH_ALLREVIEWS_START';
export const FETCH_ALLREVIEWS_SUCCESS = 'FETCH_ALLREVIEWS_SUCCESS';
export const FETCH_ALLREVIEWS_ERROR = 'FETCH_ALLREVIEWS_ERROR';


export const fetchRestaurantAll = () => dispatch => {
  dispatch({ type: FETCHALL_RESTAURANT_START });
  return axiosWithAuth()
    .get('/api/restaurants')
    .then(res => {
      console.log('get', res);
      //localStorage.setItem('token', res.data.token);
      
      console.log(res.data);
      dispatch({ type: FETCHALL_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: FETCHALL_RESTAURANT_ERROR, payload: 'res.data' });
    });
};


export const GETBYID_RESTAURANT_START = 'GETBYID_RESTAURANT_START';
export const GETBYID_RESTAURANT_SUCCESS = 'GETBYID_RESTAURANT_SUCCESS';
export const GETBYID_RESTAURANT_ERROR = 'GETBYID_RESTAURANT_ERROR';

export const getRestaurantById = (id) => dispatch => {
  dispatch({ type: GETBYID_RESTAURANT_START });
  return axiosWithAuth()
    .get(`/api/restaurants/${id}`)
    .then(res => {
      console.log('get', res);
      //localStorage.setItem('token', res.data.token);
      
      console.log(res.data);
      dispatch({ type: GETBYID_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: GETBYID_RESTAURANT_ERROR, payload: 'res.data' });
    });
};

export const fetchRestaurant = id => dispatch => {

  dispatch({type: FETCH_RESTAURANT_START});
  return axiosWithAuth()
  .get(`/api/passports/user/${id} `)
  .then(res => {
    // console.log('get', res.data)
    dispatch({type: FETCH_RESTAURANT_SUCCESS, payload: res.data});
  })
  .catch(err => {
    // console.log('err', err.response);
    dispatch({type: FETCH_RESTAURANT_ERROR });
  })
}


export const fetchRestaurantById = id => dispatch => {
  dispatch({type: FETCH_RESTAURANTID_START});
  return axiosWithAuth()
  .get(`/api/restaurants/${id} `)
  .then(res => {
    // console.log('get', res.data)
    dispatch({type: FETCH_RESTAURANTID_SUCCESS, payload: res.data});
  })
  .catch(err => {
    // console.log('err', err.response);
    dispatch({type: FETCH_RESTAURANTID_ERROR });
  })
}

export const fetchAllReviews = state => dispatch => {
  dispatch({type: FETCH_ALLREVIEWS_START});
  return axiosWithAuth()
  .get('/api/passports', state)
  .then(res => {
    console.log('get', res.data)
    dispatch({type: FETCH_ALLREVIEWS_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('err', err.response);
    dispatch({type: FETCH_ALLREVIEWS_ERROR });
  })
}


export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';

export const addRestaurant = state => dispatch => {
  dispatch({ type: ADD_RESTAURANT_START });
  return axiosWithAuth()
    .post('api/restaurants', state)
    .then(res => {
      console.log('get', res);
      console.log(res.data);
      dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: res.data });
      console.log('rest added successfully')
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: ADD_RESTAURANT_ERROR });
      console.log('rest not added')
    });
};

export const ADD_REVIEW_START = 'ADD_REVIEW_START';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_ERROR = 'ADD_REVIEW_ERROR';

export const addReview = state => dispatch => {
  dispatch({ type: ADD_REVIEW_START });
  return axiosWithAuth()
    .post('api/passports', state)
    .then(res => {
      console.log('get', res);
      dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
      console.log('review added successfully')
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: ADD_REVIEW_ERROR });
      console.log('review not added')
    });
};


export const UPDATE_RESTAURANT_START = 'UPDATE_RESTAURANT_START';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const UPDATE_RESTAURANT_ERROR = 'UPDATE_RESTAURANT_ERROR';
export const updateRestaurant = (id, updatedRestaurant) => dispatch => {
  dispatch({ type: UPDATE_RESTAURANT_START });
  return axiosWithAuth()
    .put(`/api/restaurant/${id}`, updatedRestaurant)
    .then(res => {
      console.log('get', res);
      localStorage.setItem('token', res.data);
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: UPDATE_RESTAURANT_ERROR});
    });
};
