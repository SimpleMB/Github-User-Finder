import React from 'react';
import Users from "../users/Users";
import SearchForm from "../users/SearchForm";

const Home = () => {
  return (
    <>
      <SearchForm />
      <Users />
    </>
  )
}

export default Home;