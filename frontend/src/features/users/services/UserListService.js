import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import UserApi from './UserApi';

const {
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL,
} = UserActionTypes;

const {
  userListtQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* getUserList() {
  try {
    const response = yield call(userListtQuery);

    // parse the response
    const users = response.data;

    // check if we have success or fail
    if (users
            && users.length) {
      // dispatch a success action to the store
      yield put({
        type: USER_LIST_REQUEST_SUCCESS,
        users,
      });
    } else {
      yield put({
        type: USER_LIST_REQUEST_FAIL,
        error: 'Echec de récupération de la liste des utilisateurs, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: USER_LIST_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
