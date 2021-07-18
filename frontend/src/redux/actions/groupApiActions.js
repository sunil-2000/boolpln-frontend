import {
  CREATE_GROUP_PENDING,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_ERROR,
  SEND_INVITE_PENDING,
  SEND_INVITE_SUCCESS,
  SEND_INVITE_ERROR,
  ACCEPT_INVITE_PENDING,
  ACCEPT_INVITE_SUCCESS,
  ACCEPT_INVITE_ERROR,
  LEAVE_GROUP_PENDING,
  LEAVE_GROUP_SUCCESS,
  LEAVE_GROUP_ERROR,
  DECLINE_INVITE_PENDING,
  DECLINE_INVITE_SUCCESS,
  DECLINE_INVITE_ERROR,
  GET_GROUPS_PENDING,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
  GET_INVITES_PENDING,
  GET_INVITES_SUCCESS,
  GET_INVITES_ERROR,
  RENAME_GROUP_PENDING,
  RENAME_GROUP_SUCCESS,
  RENAME_GROUP_ERROR,
} from "../types";

export const createGroupPending = () => ({
  type: CREATE_GROUP_PENDING,
});

export const createGroupSuccess = (groupName) => ({
  type: CREATE_GROUP_SUCCESS,
  payload: { groupName: groupName },
});

export const createGroupError = (error) => ({
  type: CREATE_GROUP_ERROR,
  error: error,
});

export const getGroupsPending = () => ({
  type: GET_GROUP_PENDING,
});

export const getGroupsSuccess = (groupName) => ({
  type: GET_GROUP_SUCCESS,
  payload: { groupName: groupName },
});

export const getGroupsError = (error) => ({
  type: GET_GROUP_ERROR,
  error: error,
});
