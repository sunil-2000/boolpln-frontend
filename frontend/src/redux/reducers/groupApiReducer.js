import {
  GET_GROUPS_SUCCESS,
  GET_INVITES_SUCCESS,
  GROUP_ERROR,
  GROUP_PENDING,
} from "../types";

const initialState = {
  groups: [],
  invites: [],
  pending: false,
  error: null,
};

export default function groupApiReducer(state = initialState, action) {
  switch (action.type) {
    case GROUP_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GROUP_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload.groups,
        pending: false,
      };
    case GET_INVITES_SUCCESS:
      return {
        ...state,
        invites: action.payload.invites,
        pending: false,
      };
    default:
      return state;
  }
}

// getters
export const getGroupList = (state) => state.groupApiReducer.groups;
