import {
  CREATE_GROUP_SUCCESS,
  SEND_INVITE_SUCCESS,
  ACCEPT_INVITE_SUCCESS,
  LEAVE_GROUP_SUCCESS,
  DECLINE_INVITE_SUCCESS,
  GET_GROUPS_SUCCESS,
  GET_INVITES_SUCCESS,
  RENAME_GROUP_SUCCESS,
  GROUP_ERROR,
  GROUP_PENDING,
  ADDED_GROUP_MEMBER,
  CLEAR_GROUP_MEMBERS,
  SELECT_GROUP,
} from "../types";

// non api actions
export const addedGroupMember = (groupMember) => ({
  type: ADDED_GROUP_MEMBER,
  payload: { groupMember: groupMember },
});

export const clearGroupMembers = () => ({
  type: CLEAR_GROUP_MEMBERS,
});

export const selectGroup = (groupID, groupName, members) => ({
  type: SELECT_GROUP,
  payload: {
    currentGroup: {
      groupID: groupID,
      groupName: groupName,
      groupMembers: members,
    },
  },
});

// actions for creating a group
export const createGroupSuccess = (newGroup, groupID) => ({
  type: CREATE_GROUP_SUCCESS,
  payload: { newGroup: newGroup, groupID: groupID },
});

// actions for sending an invite
export const sendInviteSuccess = (updatedGroup) => ({
  type: SEND_INVITE_SUCCESS,
  payload: { updatedGroup: updatedGroup },
});

// actions for accepting an invite
export const acceptInviteSuccess = (group, inviteId) => ({
  type: ACCEPT_INVITE_SUCCESS,
  payload: { acceptedGroup: group, inviteId: inviteId },
});

// actions for leaving a group
export const leaveGroupSuccess = (groupID) => ({
  type: LEAVE_GROUP_SUCCESS,
  payload: { deletedGroupID: groupID },
});

// actions for declining an invitation
export const declineInvitationSuccess = () => ({
  type: DECLINE_INVITE_SUCCESS,
});

// actions for getting groups
export const getGroupsSuccess = (groups) => ({
  type: GET_GROUPS_SUCCESS,
  payload: { groups: groups },
});

// actions for getting invitations
export const getInvitesSuccess = (invites) => ({
  type: GET_INVITES_SUCCESS,
  payload: { invites: invites },
});

// actions for renaming a group
export const renameGroupSuccess = (group) => ({
  type: RENAME_GROUP_SUCCESS,
  payload: { group: group },
});

export const groupPending = () => ({
  type: GROUP_PENDING,
});

export const groupError = (error) => ({
  type: GROUP_ERROR,
  error: error,
});
