import {
  UserReducer,
  UserFriendsReducer,
  UseListReducer,
} from '../../users/redux';
import {
  MessageAddReducer,
  MessageDeleteReducer,
  MessagesReducer,
} from '../../messages/redux';

const ReducerRooter = {
  user: UserReducer,
  userList: UseListReducer,
  userFriends: UserFriendsReducer,
  messageAdd: MessageAddReducer,
  messageDelete: MessageDeleteReducer,
  messages: MessagesReducer,
};

export default ReducerRooter;
