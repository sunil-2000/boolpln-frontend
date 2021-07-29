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
  console.log("Action: " + action);
  switch (action.type) {
    case USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case GET_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        username: action.payload.user.username,
        email: action.payload.user.email,
        firstName: action.payload.user.first_name,
        lastName: action.payload.user.last_name,
        pending: false,
      };
    default:
      return state;
  }
}

// getters
export const getUsername = (state) => state.userApiReducer.username;
export const getEmail = (state) => state.userApiReducer.email;
export const getFirstname = (state) => state.userApiReducer.firstName;
export const getLastname = (state) => state.userApiReducer.lastName;
