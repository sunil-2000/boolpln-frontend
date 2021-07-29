import { GET_USER_SUCCESS, USER_PENDING, USER_ERROR } from "../types";

// actions for getting user
export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: { user: user },
});

export const userPending = () => ({
  type: USER_PENDING,
});

export const userError = (error) => ({
  type: USER_ERROR,
  error: error,
});
