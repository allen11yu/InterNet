import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import MatchInternshipList from "./MatchInternshipList";
import { Link } from 'react-router-dom';

export default function HomeMatch({internshipData, handleLikeCallback}) {
  let thingToRender = null;
  if(internshipData.length === 0) {
    thingToRender = (
      <p className='fav-empty'>No matches found yet. Try adding some hashtags under the Skills section of the Profile page.</p>
    );
  } else {
    thingToRender = (
      <div>
        <div className="interactive-main">
          <MatchInternshipList internships={internshipData} handleLikeCallback={handleLikeCallback} />
        </div>
        <div className="ask-update">
          <p>Don't like what you see? <Link to="/profile">Update your profile</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div className='main'>{thingToRender}</div>
  );
}