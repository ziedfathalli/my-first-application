import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import MessagesReducer from '../redux/MessagesReducer';
import MessagesService from './MessagesService';
import MessagesApi from './MessagesApi';
import MessagesDataMock from '../commons/MessagesDataMock';

const {
  messagesFakeAction,
  messagesFakeResponse,
} = MessagesDataMock;

const {
  messagesQuery,
} = MessagesApi;

describe('Test Suite - Get Messages Service', () => {
  it('Get Messages Service (success', () => {
    const { data, } = messagesFakeResponse;
    expectSaga(MessagesService, messagesFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), messagesFakeResponse,
      ])
      .put({
        type: 'MESSAGES_REQUEST_SUCCESS',
        messages: data,
      })
      .hasFinalState({
        loading: false,
        messages: data,
        error: null,
      })
      .run();
  });
  it('Get Messages Service (fail)', () => {
    const data = {};
    const error = 'Echec lors de la récupération des messages, veuillez réessayez plus tard.';
    expectSaga(MessagesService, messagesFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), data,
      ])
      .put({
        type: 'MESSAGES_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messages: null,
        error,
      })
      .run();
  });
  it('Get Messages Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(MessagesService, messagesFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), throwError(exception),
      ])
      .put({
        type: 'MESSAGES_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messages: null,
        error,
      })
      .run();
  });
});
