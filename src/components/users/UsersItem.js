import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const UsersItem = ({user:{ login, avatar_url, html_url }}) => {

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="user avatar"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UsersItem;
