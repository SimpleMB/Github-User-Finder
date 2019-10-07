import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alerts/alertContext';

const SearchForm = () => {
  const githubContext = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const { users, handleClear } = githubContext;

  const [text, setText] = useState('');

  const handleSearch = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      setAlert("Please enter something", "light");
    } else {
      githubContext.handleFetch(text);
      setAlert(null);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleSearch}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users[0] && (
        <button className="btn btn-light btn-block" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchForm;
