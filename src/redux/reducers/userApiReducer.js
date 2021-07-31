import { GET_USER_SUCCESS, USER_PENDING, USER_ERROR } from "../types";

const initialState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
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
    default:
      return state;
  }
}

// getters
export const getUsername = (state) => state.userApiReducer.username;
export const getEmail = (state) => state.userApiReducer.email;
export const getFirstName = (state) => state.userApiReducer.firstName;
export const getLastName = (state) => state.userApiReducer.lastName;
