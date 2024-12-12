import React from 'react';
import Table from 'antd/es/table';
import UserPropTypes from '../commons/UserPropTypes';
import './UsersList.scss';

const UserListForm = ({
  userList,
  userListLoading,
}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Prénom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Nom',
      dataIndex: 'firstname',
      key: 'firstname',
    },
  ];
  return (
    <div className="users-container">
      <header className="users-header">
        <h1>Liste des Utilisateurs</h1>
      </header>
      <Table
        className="users-table"
        columns={columns}
        dataSource={userList}
        rowKey="id"
        loading={userListLoading}
      />
    </div>
  );
};

UserListForm.propTypes = {
  ...UserPropTypes.propTypes,
};

UserListForm.defaultProps = {
  ...UserPropTypes.defaultProps,
};

export default UserListForm;
