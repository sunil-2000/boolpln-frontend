// all types send by redux actions and recognized by redux reducers

// calendar ops
export const NEW_DAYS = "NEW_DAYS";

// group api
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const SEND_INVITE_SUCCESS = "SEND_INVITE_SUCCESS";
export const ACCEPT_INVITE_SUCCESS = "ACCEPT_INVITE_SUCCESS";
export const LEAVE_GROUP_SUCCESS = "LEAVE_GROUP_SUCCESS";
export const DECLINE_INVITE_SUCCESS = "DECLINE_INVITE_SUCCESS";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";
export const GET_INVITES_SUCCESS = "GET_INVITES_SUCCESS";
export const RENAME_GROUP_SUCCESS = "RENAME_GROUP_SUCCESS";
export const GROUP_ERROR = "GROUP_ERROR";
export const GROUP_PENDING = "GROUP_PENDING";

// non group api, but group related
export const ADDED_GROUP_MEMBER = "ADDED_GROUP_MEMBER";
export const CLEAR_GROUP_MEMBERS = "CLEAR_GROUP_MEMBERS";
export const SELECT_GROUP = "SELECT_GROUP";
export const DELETE_ADDED_GROUP_MEMBER = "DELETE_ADDED_GROUP_MEMBER";
export const ADDED_GROUP_NAME = "ADDED_GROUP_NAME";
export const CLEAR_ADDED_GROUP_NAME = "CLEAR_ADDED_GROUP_NAME";
// calendar types
export const GET_CALENDAR_SUCCESS = "GET_CALENDAR";
export const UPDATE_CALENDAR_SUCCESS = "UPDATE_CALENDAR_SUCCESS";
export const CALENDAR_ERROR = "CALENDAR_ERROR";
export const CALENDAR_PENDING = "CALENDAR_PENDING";

// user types
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const USER_PENDING = "USER_PENDING";
export const LOGOUT = "LOGOUT";
export const USER_ERROR = "USER_ERROR";

// general types
export const CLEAR_ERROR = "CLEAR_ERROR";
