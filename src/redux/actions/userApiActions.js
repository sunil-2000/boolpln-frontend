import { GET_USER_SUCCESS, USER_PENDING, USER_ERROR } from "../types";

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: {
    username: user.username,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  },
});

export const userPending = () => ({
  type: USER_PENDING,
});

export const userError = (error) => ({
  type: USER_ERROR,
  error: error,
});
