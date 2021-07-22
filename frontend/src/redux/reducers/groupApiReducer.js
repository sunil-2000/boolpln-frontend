import {
  ACCEPT_INVITE_SUCCESS,
  ADDED_GROUP_MEMBER,
  SELECT_GROUP,
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
    case CREATE_GROUP_SUCCESS: {
      // braces for scoping (or two declarations of groupsCopy)
      let groupsCopy = [...state.groups];
      let addedGroup = {
        groupID: action.payload.groupID,
        groupName: action.payload.newGroup,
        groupMembers: [],
      };
      groupsCopy.push(addedGroup);
      return {
        ...state,
        groups: groupsCopy,
        pending: false,
        currentGroup: addedGroup,
      };
    }
    case SEND_INVITE_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case ACCEPT_INVITE_SUCCESS: {
      let groupsCopy = [...state.groups];
      let invitesCopy = [...state.invites];
      let updatedInvites = invitesCopy.filter(
        (invite) => invite.id !== action.payload.inviteId
      );
      groupsCopy.push(action.payload.newGroup);

      return {
        ...state,
        groups: groupsCopy,
        invites: updatedInvites,
        pending: false,
      };
    }
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
      return {
        ...state,
        addedMembers: [],
      };
    case SELECT_GROUP:
      console.log(action.payload);
      return {
        ...state,
        currentGroup: action.payload.currentGroup,
      };
    default:
      return state;
  }
}

// getters
export const getGroupList = (state) => state.groupApiReducer.groups;
export const getCurrentGroup = (state) => state.groupApiReducer.currentGroup;
export const getPendingStatus = (state) => state.groupApiReducer.pending;
export const getAddedMembers = (state) => state.groupApiReducer.addedMembers;
export const getInvites = (state) => state.groupApiReducer.invites;
