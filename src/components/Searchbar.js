import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from "react-icons/bs";

export default function Search({searchCallback}) {
  const [queryText, setQueryText] = useState('');

  /**
   * Handle the search bar text field when user inputs.
   */
  const handleChange = (event) => {
    setQueryText(event.target.value);
  }

  /**
   * Handles the search submit button.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    searchCallback(queryText);
  }

  return (
    <form className="text-center">
      <label className="px-2">
          <BsSearch />
      </label>
      <input
          value={queryText}
          onChange={handleChange}
          type="text"
          id="search"
          placeholder="Search for an internship"
          name="s"
          size="50"
      />
      <button onClick={handleSubmit} aria-label="Search" type="submit" className="m-3">Search</button>
    </form>
  );
}