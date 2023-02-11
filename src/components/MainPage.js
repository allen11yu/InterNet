import React from "react";

import InternshipList from "./InternshipList";
import Search from './Searchbar.js';

export function MainPage({intershipData, handleLikeCallback, searchCallback}) {
  return (
    <div className="main">
      <Search searchCallback={searchCallback} />
      <InternshipList internships={intershipData} handleLikeCallback={handleLikeCallback} />
    </div>
  );
}

export default MainPage;