import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({repo}) => {
  const {name, html_url, description} = repo;

  return (
  <div className="card">
    <a href={html_url} target="_blank" rel="noopener noreferrer">{name} </a>- {description}
  </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;