import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);

  const { repos } = githubContext;

  const repoList = repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
  return (
    <>
      <h3>User latest repositories:</h3>
      {repoList}
    </>
  );
};


export default Repos;
