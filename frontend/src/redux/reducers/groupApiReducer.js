import {
  CREATE_GROUP_PENDING,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_ERROR,
  GET_GROUPS_PENDING,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from "../types";

const initialState = {
  groups: [],
  invites: [],
  pending: false,
  error: null,
};

export function createGroupApiReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        groups: [...state.groups] + action.payload,
      };
    case CREATE_GROUP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export function getGroupApiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS_PENDING:
      return null;
    case GET_GROUPS_SUCCESS:
      return null;
    case GET_GROUPS_ERROR:
      return null;
    default:
      return state;
  }
}

// getters
export const getGroupList = (state) => state.groupApiReducer.groups;
