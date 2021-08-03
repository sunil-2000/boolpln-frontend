import {
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  REFRESH_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGOUT,
  USER_PENDING,
  USER_ERROR,
} from "../types";

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: {
    username: user.username,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  },
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username: data.user.username,
    email: data.user.email,
    firstName: data.user.first_name,
    lastName: data.user.last_name,
    accessToken: data.access,
    refreshToken: data.refresh,
  },
});

export const refreshSuccess = (data) => ({
  type: REFRESH_SUCCESS,
  payload: {
    refreshToken: data.refresh,
  },
});

export const createUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  payload: {
    username: data.username,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    accessToken: data.access,
    refreshToken: data.refresh,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const userPending = () => ({
  type: USER_PENDING,
});

export const userError = (error) => ({
  type: USER_ERROR,
  error: error,
});
