import {
  Matcher,
} from '../../../core';
import UserActionTypes from './UserActionTypes';

const {
  USER_LIST_REQUEST,
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL,
} = UserActionTypes;

const initialState = {
  loading: false,
  users: null,
  error: null,
};

const UseListReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === USER_LIST_REQUEST, () => ({
    ...state,
    loading: true,
    users: null,
    error: null,
  }))
  .on(() => action.type === USER_LIST_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    users: action.users,
    error: null,
  }))
  .on(() => action.type === USER_LIST_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    users: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default UseListReducer;
