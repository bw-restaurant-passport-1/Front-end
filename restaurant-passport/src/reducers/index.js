import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/index';

export const initialState = {
  user: [],
  loggingIn: false,
  username: '',
  error: '',
  signingUp: false,
  token: localStorage.getItem('token')
};

export const passportReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        username: action.payload.username
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false
        //TODO: error: action.payload
      };

    case SIGNUP_START:
      return {
        ...state,
        signingUp: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signingUp: false,
        token: action.payload
      };
    //all of this above can change depending on how api/backend is structure just a base idea

    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    default:
      return state;
  }
};
