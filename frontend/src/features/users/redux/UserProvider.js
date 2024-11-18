const UserFragment = (state) => ({
  user: state?.user?.user,
});

const UserLoginFragment = (state) => ({
  userLoginLoading: state?.user?.loginLoading,
  userLoginError: state?.user?.loginError,
});

const UserLogoutFragment = (state) => ({
  userLogoutStatus: state?.user?.logOutStatus,
  userLogoutStatusLoading: state?.user?.logOutLoading,
  userLogoutStatusError: state?.user?.logOutError,
});

const UserFriendsFragment = (state) => ({
  userFriends: state?.userFriends?.friends,
  userFriendsLoading: state?.userFriends?.loading,
  userFriendsError: state?.userFriends?.error,
});

const UserListFragment = (state) => ({
  userList: state?.userList?.users,
  userListLoading: state?.userList?.loading,
  userListError: state?.userList?.error,
});

const UserProvider = {
  UserFragment,
  UserLoginFragment,
  UserLogoutFragment,
  UserFriendsFragment,
  UserListFragment,
};

export default UserProvider;
