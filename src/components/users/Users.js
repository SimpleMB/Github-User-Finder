import React from "react";
import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';


const Users = ({ users, loading }) => {
  const usersList = users.map(user => <UsersItem key={user.id} user={user} />);
  
  return <div style={userStyle}>{loading ? <Spinner /> : usersList}</div>;
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Users;
