import '../index.css';
import React, { useState } from 'react';

import SAMPLE_INTERNSHIPS from '../data/internships.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './ProfilePage.js';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import HomeMatch from './Homematch.js';
import { Login } from './Login.js';
import { MainPage } from './MainPage';
import { About } from './About.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import { FavoritePage } from './FavoritePage';

function App() {
  const [currData, setCurrData] = useState(SAMPLE_INTERNSHIPS);
  const [profileInfo, setProfile] = useState({
    "img": "",
    "Name": "",
    "School": "",
    "Class": "",
    "Location": "",
    "Description": "",
    "Projects": "",
    "Experience": "",
    "Skills": ""

  });
  const [profileEdit, setProfileEdit] = useState(false);
  const [currCloneData, setCloneData] = useState(currData);
  const [isLogin, setIsLogin] = useState(false);

  /**
   * Updates the data when an internship is being liked.
   */
  const handleLike = (internship) => {
    let temp = [];
    for(let i = 0; i < currData.length; i++) {
      let currInternship = currData[i];
      if(currInternship === internship) {
        currInternship.liked = !currInternship.liked;
      }
      temp.push(currInternship);
    }
    setCurrData(temp);
    setCloneData(currData);
  }

  /**
   * Use the regex to handle the search bar feature.
   */
  const handleSearch = (query) => {
    if(query !== '') {
      let temp = [];
      for(let i = 0; i < currCloneData.length; i++) {
        let currInternship = currCloneData[i];

        let regex = new RegExp(`\\b${query}\\b`);
        let regexDes = currInternship.description.match(regex);
        let regexLocation = currInternship.location.match(regex);
        let regexRole = currInternship.role.match(regex);
        let regexTime = currInternship.time.match(regex);

        if((regexDes !== null || regexLocation !== null || regexRole !== null || regexTime !== null) && !(temp.includes(currInternship))) {
          temp.push(currInternship);
        }
      }
      setCurrData(temp);
    } else {
      setCurrData(currCloneData);
    }
  }

  /**
   * The code below takes the hashtags/words from the Skills section
   * of the profile page and use regex to see if the words matches
   * anything to the internship qualification.
   */
  let skillTags = profileInfo.Skills;
  let matchedInternships = [];
  if(skillTags !== '') {
    skillTags = skillTags.replaceAll('#', '').split(', ');

    for(let i = 0; i < currData.length; i++) {
      let currInternship = currData[i];
      let currQualification = currInternship.qualifications;
      for(let j = 0; j < skillTags.length; j++) {
        let currTag = skillTags[j];

        let regex = new RegExp(`\\b${currTag}\\b`);
        let regexOutput = currQualification.match(regex);

        if(!(regexOutput === null) && !(matchedInternships.includes(currInternship))) {
          matchedInternships.push(currInternship);
        }
      }
    }
  }

  return (
    <Switch>
      <Route>
        <Navigation isLogin={isLogin} setIsLoginCallback={setIsLogin} setProfileEdit={setProfileEdit} currentProfile={profileInfo} />
        <Route exact path="/">
          <MainPage intershipData={currData} handleLikeCallback={handleLike} searchCallback={handleSearch} />
        </Route>

        <Route exact path="/match">
          <HomeMatch internshipData={matchedInternships} handleLikeCallback={handleLike} />
        </Route>

        <Route exact path="/profile">
          <Profile currentProfile={profileInfo} profileCallBack={setProfile} profileEdit={profileEdit} setProfileEdit={setProfileEdit} isLogin={isLogin}/>
        </Route>

        <Route exact path="/login">
          <Login setIsLoginCallback={setIsLogin} />
        </Route>

        <Route exact path="/about">
          <About postedNum={currData.length} />
        </Route>

        <Route exact path="/favorite">
          <FavoritePage internshipData={currData} handleLikeCallback={handleLike} searchCallback={handleSearch} />
        </Route>
        <Redirect to="/" />
        <Footer />
      </Route>

    </Switch>
  );
}

export default App;