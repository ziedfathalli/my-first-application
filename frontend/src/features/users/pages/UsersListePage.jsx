import React, { Component, } from 'react';
import Spin from 'antd/es/spin';
import {
  ReduxMe,
} from '../../../core';
import {
  AppLayout,
} from '../../commons';
import {
  UserDispatcher,
  UserProvider,
} from '../redux';
import UserPropTypes from '../commons/UserPropTypes';
import '../components/UserForm.scss';

const {
  UserListFragment,
} = UserProvider;

@ReduxMe((state) => ({
  ...UserListFragment(state),
}), {
  ...UserDispatcher,
})
class UsersListePage extends Component {
  componentDidMount() {
    this.initPage();
  }

    initPage = () => {
      const {
        requestUserList,
      } = this.props;
      requestUserList();
    }

    render() {
      const {
        userListLoading,
        userList,
      } = this.props;
      consle.log('testtt result', userList);
      return (
        <AppLayout
          showSideBar={false}
          content={(
            <Spin
              spinning={userListLoading}
              size="large"
            >
              <div className="user_form_login--page" />
            </Spin>
          )}
        />
      );
    }
}

UsersListePage.propTypes = {
  ...UserPropTypes.propTypes,
};

UsersListePage.defaultProps = {
  ...UserPropTypes.defaultProps,
};

export default UsersListePage;
