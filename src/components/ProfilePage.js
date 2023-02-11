import React, { useState, useRef } from 'react';

import { BsFillPencilFill } from "react-icons/bs";
import { InputTags } from 'react-bootstrap-tagsinput';
import 'react-bootstrap-tagsinput/dist/index.css';

export default function Profile({currentProfile, profileCallBack, profileEdit, setProfileEdit, isLogin}) {
  const [hashtags, setHashtags] = useState([]);

  let recentEdit = false;
  const leftFields = useRef(null);
  const rightFields = useRef(null);
  const outputFile = useRef(null);

  /**
   * Handle form submit (i.e. when pencil icon is clicked), show/hide form fields.
   */
  const handleClick = () => {
    if (profileEdit === true) {
      recentEdit = true;
    }

    if (recentEdit === false) {
      setProfileEdit(true);
      hideForms(leftFields, rightFields, currentProfile, profileCallBack, setProfileEdit, hashtags);
    } else {
      setProfileEdit(false);
      showForms(leftFields, rightFields, profileCallBack);
    }
  }

  /**
   * Allow user to change profile picture.
   */
  const loadFile = function (event) {
    outputFile.current.src = URL.createObjectURL(event.target.files[0]);
    currentProfile.img = URL.createObjectURL(event.target.files[0]);
  };

  /**
   * Don't render profile page if not logged in.
   * Otherwise, if previous edits were made, render the edits in the profile.
   * Else, render blank profile.
   */
  let thingToRender = null;
  if(!isLogin) {
    setProfileEdit(false);
    thingToRender = (
      <p className='fav-empty'>To update the personal preference, please login first.</p>
    );
  } else {
    if (profileEdit) {
      thingToRender =  (
        <SubmitForm currentProfile={currentProfile} handleClick={handleClick} leftFields={leftFields} rightFields={rightFields} outputFile={outputFile} />
      );
    } else {
      thingToRender = (
        <div>
          <div className="container d-flex flex-column align-items-center mt-5 mb-5">
            {/* <!-- Left Fields --> */}
            <div className="row">
              <div className="col-lg-4 d-flex ">
                <div className="mb-3 card flex-fill border-0">
                  <div className="card-body profile img-layer" >
                    <div className="row">
                        <div className="col-sm-auto col-lg-12">
                        <label className="-label" htmlFor="file">
                          <span className="glyphicon glyphicon-camera"></span>
                        </label>

                          <img ref={outputFile} src="./img/pic.png " alt="user's Profile Pic" id="output" width="250" className="d-block profile-pic"/>
                          <input id="file" type="file" className="form-control mb-3 form-control-sm" onChange={loadFile}/>
                        </div>
                        <div className="col-sm align-items-center m-auto">
                          <form className="professional" ref={leftFields}>
                            <div className="form-group row">

                              <label htmlFor="name" className="col-4 col-form-label-sm mb-3 hideLabel">Name:</label>
                              <div className="col-lg-8">
                                <input type="text" className="form-control d-inline" id="name" placeholder="Name"/>
                              </div>
                            </div>


                            <div className="form-group row">
                              <label htmlFor="school" className="col-4 col-form-label-sm mb-3 hideLabel">School:</label>
                              <div className="col-lg-8">
                                <input type="text" className="form-control" id="school" placeholder="School"/>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label htmlFor="year" className="col-4 col-form-label-sm mb-3 hideLabel">Class of:</label>
                              <div className="col-lg-8">
                                <input type="text" className="form-control" id="year" placeholder="Graduation Year"/>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label htmlFor="location" className="col-4 col-form-label-sm mb-3 hideLabel">Location:</label>
                              <div className="col-lg-8">
                                <input type="text" className="form-control" id="location" placeholder="Location"/>
                              </div>
                            </div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Right Fields --> */}
              <div className="col-lg-8 d-flex about">
                <div className="mb-3 card flex-fill border-0">
                  <div className="card-body about profile align-content-center">
                    <div className="row">
                      <div className="col-sm d-flex flex-column">
                        <div className="d-flex flex-row-reverse ">
                          <span>
                          <BsFillPencilFill className="mx-3 pencil-icon" onClick={handleClick}/>
                          </span>
                        </div>
                        <span className="d-flex flex-row-reverse pencil mx-2">
                            Submit
                        </span>
                        <form ref={rightFields}>
                          <div className="container d-flex flex-column flex-nowrap">
                            <div className="form-group row mt-3">
                              <label htmlFor="description" className="col-form-label-sm mt-3 showLabel">Description:</label>
                              <input type="text" className="form-control" id="description" placeholder="Description"/>
                            </div>
                            <div className="form-group row mt-3">
                              <label htmlFor="projects" className="col-form-label-sm showLabel">Projects:</label>
                              <input type="text" className="form-control" id="projects" placeholder="Projects"/>
                            </div>

                            <div className="form-group row mt-3">
                              <label htmlFor="experience" className="col-form-label-sm showLabel">Experience:</label>
                              <input type="text" className="form-control" id="experience" placeholder="Experience"/>
                            </div>
                            <div className="form-group row mt-3">
                              <label htmlFor="skills" className="col-form-label-sm showLabel">Skills:</label>
                              <InputTags values={hashtags} onTags={(value) => {
                                setHashtags(value.values);
                              }} type="text" className="form-control" id="skills" placeholder="Skills"/>
                            </div>

                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>{thingToRender}</div>
  );
}

/**
 * Show all form fields with the current user input in each form field.
 */
function showForms(leftFields, rightFields, profileCallBack) {
  let allForms = [];
  allForms.push(leftFields.current);
  allForms.push(rightFields.current)
  for (let i = 0; i < allForms.length; i++) {
    let tempForm = allForms[i];
    // Go through each form element
    for (let j = 0; j < tempForm.length; j++) {
      // Change form to user input
      let element = tempForm[j];
      element.classList.remove("hideForm");
      element.parentElement.removeChild(element.parentElement.getElementsByTagName('p')[0]);
    }
  }
  profileCallBack({
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
}

/**
 * Hide all form fields, only show user input.
 */
function hideForms(leftFields, rightFields, currentProfile, profileCallBack, setProfileEdit, hashtags) {
  let allForms = [];
  for (let i = 0; i < leftFields.current.length; i++) {
    allForms.push(leftFields.current[i]);
  }
  for (let i = 0; i < rightFields.current.length; i++) {
    allForms.push(rightFields.current[i]);
  }
  for (let j = 0; j < allForms.length; j++) {
    // Change form to user input
    let element = allForms[j];
    currentProfile[Object.keys(currentProfile)[j + 1]] = element.value;
    element.classList.add("hideForm");
  }
  setProfileEdit(true);
  let result = "#" + hashtags[0];
  for (let i = 1; i < hashtags.length; i++) {
    result += ', #' + hashtags[i];
  }
  if (result === "#undefined") {
    result = "";
  }
  currentProfile.Skills = result;
  profileCallBack(currentProfile);
}

/**
 * Render profile with user edits.
 */
function SubmitForm({currentProfile, handleClick, leftFields, rightFields, outputFile}) {
  return (
      <div>
        <div className="container d-flex flex-column mt-5 mb-5">
          {/* <!-- Left Fields --> */}
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="mb-3 card flex-fill border-0 ">
                <div className="card-body profile img-layer align-self-center shrinkContent" >
                  <div className="row">
                      <div className="col-sm-auto col-lg-12">
                      <label className="-label" htmlFor="file">
                        <span className="glyphicon glyphicon-camera"></span>
                      </label>

                        <img ref={outputFile} src={currentProfile.img} alt="user's profile pic" id="output" width="250" className="d-block profile-pic"/>
                      </div>
                      <div className="col-sm align-items-center m-auto">
                        <form className="professional" ref={leftFields}>
                          <div className="form-group row">

                            <label htmlFor="name" className="col-4 col-form-label-sm mb-3 hideLabel">Name:</label>
                            <div className="col-lg-8">
                              <p className="d-inline">{currentProfile.Name}</p>
                            </div>
                          </div>


                          <div className="form-group row">
                            <label htmlFor="school" className="col-4 col-form-label-sm mb-3 hideLabel">School:</label>
                            <div className="col-lg-8">
                              <p>{currentProfile.School}</p>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="year" className="col-4 col-form-label-sm mb-3 hideLabel">Class of:</label>
                            <div className="col-lg-8">
                              <p>{currentProfile.Class}</p>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="location" className="col-4 col-form-label-sm mb-3 hideLabel">Location:</label>
                            <div className="col-lg-8">
                              <p>{currentProfile.Location}</p>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Fields --> */}
            <div className="col-lg-8 d-flex about ">
              <div className="mb-3 card flex-fill border-0 flex-shrink-0">
                <div className="card-body about profile align-content-center">
                  <div className="row">
                    <div className="col-sm d-flex flex-column">
                      <div className="d-flex flex-row-reverse ">
                        <span>
                        <BsFillPencilFill className="mx-3 pencil-icon" onClick={handleClick}/>
                        </span>
                      </div>
                      <span className="d-flex flex-row-reverse pencil">
                          Edit Profile
                      </span>
                      <form ref={rightFields}>
                        <div className="container d-flex flex-column flex-nowrap">
                          <div className="form-group row mt-3 mr-3 showLabel">
                            <label htmlFor="description" className="col-form-label-sm mt-3">Description:</label>
                            <p>{currentProfile.Description}</p>
                          </div>
                          <div className="form-group row mt-3 showLabel">
                            <label htmlFor="projects" className="col-form-label-sm">Projects:</label>
                            <p>{currentProfile.Projects}</p>
                          </div>

                          <div className="form-group row mt-3 showLabel">
                            <label htmlFor="experience" className="col-form-label-sm">Experience:</label>
                            <p>{currentProfile.Experience}</p>
                          </div>
                          <div className="form-group row mt-3 showLabel">
                            <label htmlFor="skills" className="col-form-label-sm">Skills:</label>
                            <p>{currentProfile.Skills}</p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}