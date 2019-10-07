import React, { useContext } from "react";
import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";
import GithubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContext = useContext(GithubContext)
  const {users, loading} = githubContext;

  const usersList = users.map(user => <UsersItem key={user.id} user={user} />);
  
  return <div style={userStyle}>{loading ? <Spinner /> : usersList}</div>;
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Users;
