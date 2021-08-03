import {
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  REFRESH_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGOUT,
  USER_PENDING,
  USER_ERROR,
  CLEAR_ERROR,
} from "../types";

const initialState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  accessToken: "",
  refreshToken: "",
  loggedIn: false,
  pending: false,
  error: null,
};

export default function userApiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        pending: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        loggedIn: true,
        pending: false,
      };
    case REFRESH_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        loggedIn: true,
        pending: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        loggedIn: true,
        pending: false,
      };
    case LOGOUT:
      return {
        ...state,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        accessToken: "",
        refreshToken: "",
        loggedIn: false,
        pending: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

// getters
export const getUsername = (state) => state.userApiReducer.username;
export const getEmail = (state) => state.userApiReducer.email;
export const getFirstName = (state) => state.userApiReducer.firstName;
export const getLastName = (state) => state.userApiReducer.lastName;
export const getRefreshToken = (state) => state.userApiReducer.refreshToken;
export const getAccessToken = (state) => state.userApiReducer.accessToken;
export const getLoggedIn = (state) => state.userApiReducer.loggedIn;
export const getUserError = (state) => state.userApiReducer.error;
