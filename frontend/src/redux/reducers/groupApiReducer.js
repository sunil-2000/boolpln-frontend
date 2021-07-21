import {
  ADDED_GROUP_MEMBER,
  CLEAR_GROUP_MEMBERS,
  CREATE_GROUP_SUCCESS,
  GET_GROUPS_SUCCESS,
  GET_INVITES_SUCCESS,
  GROUP_ERROR,
  GROUP_PENDING,
  SEND_INVITE_SUCCESS,
} from "../types";

const initialState = {
  groups: [],
  invites: [],
  pending: false,
  error: null,
  currentGroup: null,
  addedMembers: [],
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
    case SEND_INVITE_SUCCESS:
      return {
        ...state,
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
    // non api calls
    case ADDED_GROUP_MEMBER:
      let addedMembersCopy = [...state.addedMembers];
      addedMembersCopy.push(action.payload.groupMember);
      return {
        ...state,
        addedMembers: addedMembersCopy,
      };
    case CLEAR_GROUP_MEMBERS:
      console.log("in clear");
      return {
        ...state,
        addedMembers: [],
      };
    default:
      return state;
  }
}

// getters
export const getGroupList = (state) => state.groupApiReducer.groups;
export const getCurrentGroup = (state) => state.groupApiReducer.currentGroup;
export const getPendingStatus = (state) => state.groupApiReducer.pending;
