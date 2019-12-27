import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  FETCHING_RESTAURANT_START,
  FETCHING_RESTAURANT_SUCCESS,
  FETCHING_RESTAURANT_ERROR, 
  ADDING_RESTAURANT_START,
  ADDING_RESTAURANT_SUCCESS,
  ADDING_RESTAURANT_ERROR,
  UPDATE_RESTAURANT_START,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_ERROR
} from '../actions/index';

export const initialState = {
  user: [],
  loggingIn: false,
  username: '',
  error: '',
  signingUp: false,
  isFetching: false,
  isEditing: false,
  restaurants: [],
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

      case FETCHING_RESTAURANT_START:
        return {
          ...state,
          isFetching: true
        }
        
        case FETCHING_RESTAURANT_SUCCESS:
          return {
            ...state,
            restaurants: action.payload,
            isFetching: false
          }
          
          case FETCHING_RESTAURANT_ERROR:
            return {
              ...state,
              isFetching: false,
              error: action.payload
            }
            case ADDING_RESTAURANT_START:
              return {
                ...state,
                isFetching: true
              }
            case ADDING_RESTAURANT_SUCCESS:
              return {
                ...state,
                restaurants: [...state.restaurants, action.payload]
              }
              case ADDING_RESTAURANT_ERROR:
              return {
                ...state, 
                isFetching: false,
                error: action.payload
              }
              case UPDATE_RESTAURANT_START:
                return {
                  ...state,
                  isFetching: true,
                }
              case UPDATE_RESTAURANT_SUCCESS:
                return {
                  restaurants:state.restaurants.map(rest => rest.id === action.id ? {
                    ...restaurants, isEditing:!action.isEditing}: restaurants)
                }
                case UPDATE_RESTAURANT_ERROR:
                  return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                  }
    default:
      return state;
  }
};
