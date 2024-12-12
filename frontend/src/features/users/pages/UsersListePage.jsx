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
// eslint-disable-next-line import/order
import loadable from '@loadable/component';

const UserListForm = loadable((props) => import(`../components/${props.path}`), {
  fallback: <Spin spinning />,
  cacheKey: (props) => props.path,
});

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
        userListError,
      } = this.props;
      return (
        <AppLayout
          showSideBar={false}
          content={(
            <Spin
              spinning={userListLoading}
              size="large"
            >
              <div className="user_form_login--page">
                <UserListForm
                  path="UserListForm"
                  userListLoading={userListLoading}
                  userList={userList}
                  userListError={userListError}
                />
              </div>
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
