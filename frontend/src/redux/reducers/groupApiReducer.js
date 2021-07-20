import {
  CREATE_GROUP_SUCCESS,
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
  currentGroup: null,
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
    case CREATE_GROUP_SUCCESS:
      let groupsCopy = [...state.groups];
      let addedGroup = {
        groupID: action.payload.groupID,
        groupName: action.payload.newGroup,
      };
      groupsCopy.push(addedGroup);
      return {
        ...state,
        groups: groupsCopy,
        pending: false,
        currentGroup: addedGroup,
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
export const getCurrentGroup = (state) => state.groupApiReducer.currentGroup;
export const getPendingStatus = (state) => state.groupApiReducer.pending;
