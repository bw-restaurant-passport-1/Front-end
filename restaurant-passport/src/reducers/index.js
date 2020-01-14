import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GETBYID_RESTAURANT_START,
  GETBYID_RESTAURANT_SUCCESS,
  GETBYID_RESTAURANT_ERROR,
  FETCH_RESTAURANT_START,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_ERROR,
  FETCHALL_RESTAURANT_START,
  FETCHALL_RESTAURANT_SUCCESS,
  FETCHALL_RESTAURANT_ERROR,
  FETCH_RESTAURANTID_START,
  FETCH_RESTAURANTID_SUCCESS,
  FETCH_RESTAURANTID_ERROR,
  FETCH_ALLREVIEWS_START,
  FETCH_ALLREVIEWS_SUCCESS,
  FETCH_ALLREVIEWS_ERROR,
  ADD_RESTAURANT_START,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_ERROR,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_ERROR,
  UPDATE_RESTAURANT_START,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_ERROR
} from '../actions/index';

const localUser = JSON.parse(localStorage.getItem('user'));
export const initialState = {
  user: localUser,
  loggingIn: false,
  username: '',
  error: '',
  signingUp: false,
  isFetching: false,
  isEditing: false,
  restaurants: [],
  restaurantId: [],
  allRestaurants: [],

  singleRestaurant: [],
  token: localStorage.getItem('token'),
  makeLifeEasier: false,

  reviews: [],
  

};
export const passportReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
    console.log(state,"logs before username is set in response")
      return {
        ...state,
        loggingIn: false,
        user: action.payload
        
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
        token: action.payload.token
        
      };
      //console.log(state)
    //all of this above can change depending on how api/backend is structure just a base idea

    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };

    case GETBYID_RESTAURANT_START:
      return {
        ...state,
        isFetching: true
      };

    case GETBYID_RESTAURANT_SUCCESS:
      return {
        ...state, 
        isFetching: false,
        singleRestaurant: action.payload,
        makeLifeEasier: true
      };

    case GETBYID_RESTAURANT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case FETCH_RESTAURANT_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        isFetching: false
      };

    case FETCH_RESTAURANT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case FETCHALL_RESTAURANT_START:
      return{
        ...state,
        isFetching: true
      };

    case FETCHALL_RESTAURANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allRestaurants: action.payload
      };

    case FETCHALL_RESTAURANT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

      case FETCH_RESTAURANTID_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_RESTAURANTID_SUCCESS:
      return {
        ...state,
        restaurantId: action.payload,
        isFetching: false
      };

    case FETCH_RESTAURANTID_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

      case FETCH_ALLREVIEWS_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_ALLREVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        isFetching: false
      };

    case FETCH_ALLREVIEWS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };


    case ADD_RESTAURANT_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload]
      };
    case ADD_RESTAURANT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

      case ADD_REVIEW_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      };
    case ADD_REVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case UPDATE_RESTAURANT_START:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_RESTAURANT_SUCCESS:
      return {
        restaurants: state.restaurants.map(rest =>
          rest.id === action.id
            ? {
                ...state.restaurants,
                isEditing: !action.isEditing
              }
            : state.restaurants
        )
      };
    case UPDATE_RESTAURANT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
