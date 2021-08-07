import {
  ACCEPT_INVITE_SUCCESS,
  DECLINE_INVITE_SUCCESS,
  ADDED_GROUP_MEMBER,
  SELECT_GROUP,
  CLEAR_GROUP_MEMBERS,
  CREATE_GROUP_SUCCESS,
  GET_GROUPS_SUCCESS,
  GET_INVITES_SUCCESS,
  GROUP_ERROR,
  GROUP_PENDING,
  SEND_INVITE_SUCCESS,
  RENAME_GROUP_SUCCESS,
  LEAVE_GROUP_SUCCESS,
  CLEAR_ERROR,
  DELETE_ADDED_GROUP_MEMBER,
  ADDED_GROUP_NAME,
  CLEAR_ADDED_GROUP_NAME,
} from "../types";

const initialState = {
  groups: [],
  invites: [],
  pending: false,
  error: null,
  currentGroup: null,
  addedMembers: [],
  addedGroupName: null,
};

export default function groupApiReducer(state = initialState, action) {
  switch (action.type) {
    case GROUP_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GROUP_ERROR:
      console.log(action.error);
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
        addedGroupName: null,
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
        (invite) => invite.id !== action.payload.inviteID
      );
      groupsCopy.push(action.payload.acceptedGroup);
      return {
        ...state,
        groups: groupsCopy,
        invites: updatedInvites,
        pending: false,
        currentGroup:
          state.currentGroup !== null
            ? action.payload.acceptedGroup
            : state.currentGroup,
      };
    }
    case DECLINE_INVITE_SUCCESS:
      let invitesCopy = [...state.invites];
      let updatedInvites = invitesCopy.filter(
        (invite) => invite.inviteID !== action.payload.inviteID
      );
      return {
        ...state,
        invites: updatedInvites,
        pending: false,
      };
    case GET_GROUPS_SUCCESS: {
      let currentGroup = null;
      if (state.currentGroup === null && action.payload.groups.length > 0) {
        console.log("ass buckets");
        currentGroup = action.payload.groups[0];
      } else {
        currentGroup = state.currentGroup;
      }
      return {
        ...state,
        groups: action.payload.groups,
        pending: false,
        currentGroup: currentGroup,
      };
    }
    case GET_INVITES_SUCCESS:
      return {
        ...state,
        invites: action.payload.invites,
        pending: false,
      };
    case RENAME_GROUP_SUCCESS:
      const modifiedGroupID = action.payload.group.groupID;
      let groupsCopy = [...state.groups];
      let updated = groupsCopy.filter(
        (group) => group.groupID !== modifiedGroupID
      );
      updated.push(action.payload.group);
      return {
        ...state,
        groups: updated,
        currentGroup: action.payload.group,
        pending: false,
      };
    case LEAVE_GROUP_SUCCESS: {
      const groupsCopy = [...state.groups];
      let updated = groupsCopy.filter(
        (group) => group.groupID !== action.payload.deletedGroupID
      );
      let currentGroup = null;
      if (updated.length > 0) {
        currentGroup = updated[0];
      }
      return {
        ...state,
        currentGroup: currentGroup,
        groups: updated,
        pending: false,
      };
    }
    // non api calls
    case ADDED_GROUP_MEMBER: {
      let addedMembersCopy = [...state.addedMembers];
      const updated = addedMembersCopy.filter(
        (member) => member.id !== action.payload.id
      );
      updated.push(action.payload);
      return {
        ...state,
        addedMembers: updated,
      };
    }
    case CLEAR_GROUP_MEMBERS:
      return {
        ...state,
        addedMembers: [],
      };
    case SELECT_GROUP:
      return {
        ...state,
        currentGroup: action.payload.currentGroup,
      };
    case DELETE_ADDED_GROUP_MEMBER: {
      const copy = [...state.addedMembers];
      const updated = copy.filter((member) => member.id !== action.payload.id);
      return {
        ...state,
        addedMembers: updated,
      };
    }
    case ADDED_GROUP_NAME: {
      return {
        ...state,
        addedGroupName: action.payload.groupName,
      };
    }
    case CLEAR_ADDED_GROUP_NAME:
      return {
        ...state,
        addedGroupName: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
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
export const getGroupError = (state) => state.groupApiReducer.error;
export const getAddedGroupName = (state) =>
  state.groupApiReducer.addedGroupName;
