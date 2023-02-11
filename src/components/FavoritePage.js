import React from "react";

import InternshipList from "./InternshipList";
import Search from "./Searchbar";

export function FavoritePage({internshipData, handleLikeCallback, searchCallback}) {
  let currFavs = [];
  for(let i = 0; i < internshipData.length; i++) {
    let currInternship = internshipData[i];
    if(currInternship.liked) {
      currFavs.push(currInternship);
    }
  }

  let thingToRender = null;
  if(currFavs.length === 0) {
    thingToRender = (
      <p className='fav-empty'>Nothing in favorite list. Click the heart sign to add.</p>
    );
  } else {
    thingToRender = (
      <InternshipList internships={currFavs} handleLikeCallback={handleLikeCallback}/>
    );
  }

  return (
    <div className="main">
      <Search searchCallback={searchCallback}/>
      {thingToRender}
    </div>
  );
}

export default FavoritePage;