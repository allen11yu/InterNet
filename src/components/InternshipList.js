import React, { useState } from 'react';

import { faHeart as filledHeart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InternshipCard({internship, handleLikeCallback, includeDetails, detailCallback}) {
  let likeOrDislike = outlinedHeart;
  if(internship.liked) {
    likeOrDislike = filledHeart;
  } else {
    likeOrDislike = outlinedHeart;
  }

  /**
   * Hides the search bar when showing the detail of an internship
   */
  const handleDetail = (e) => {
    e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.classList.add("hideCards");
    includeDetails(true);
    detailCallback(internship);
  }

  return (
      <div className='intern-card'>
        <img className='intern-card-img' src={internship.img} alt="company logo" />
        <div className='intern-card-info' >
            <p onClick={handleDetail}>{internship.role}</p>
            <div onClick={() => {
              handleLikeCallback(internship);
            }}><FontAwesomeIcon icon={likeOrDislike} className='heart'/></div>
        </div>
      </div>
  );
}


export function InternshipDetail({currentDetail, handleLikeCallback}) {
  let likeOrDislike = outlinedHeart;
  if(currentDetail.liked) {
    likeOrDislike = filledHeart;
  } else {
    likeOrDislike = outlinedHeart;
  }

  return (
    <div>
      <div className="internship-detail-card">
        {/* <!--This is left flex box--> */}
        <div className="internship-detail-company">
          <div className="text-center">
            <img src={currentDetail.img} alt={currentDetail.role}  />
          </div>
          <h2>{currentDetail.company}</h2>
          <h3>{currentDetail.location}</h3>
          <h3>{currentDetail.role}</h3>
          <h3>{currentDetail.time} </h3>
          <div className="text-center">
            <a href={currentDetail.link} target="_blank" rel="noreferrer"><button type="button" aria-label="Apply" className="btn btn-info m-3">Apply</button></a>
            <FontAwesomeIcon onClick={() => {
              handleLikeCallback(currentDetail);
            }} icon={likeOrDislike} className= 'heart-detail mx-5' />
          </div>
        </div>

        {/* <!--This is right flex box--> */}
        <div className="internship-detail-desc">
            <h2> Description </h2>
            <ul className="m-3">
              <li>
                {currentDetail.description}
              </li>
              <li>
                {currentDetail.responsibilities}
              </li>
              <li>
                {currentDetail.qualifications}
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

function InternshipList({internships, handleLikeCallback}) {
  const [details, setDetails] = useState(false);
  const [detailInfo, setInfo] = useState(null);

  /**
   * Handle the back button, reveals the search bar and the internship cards.
   */
  const handleBack = (e) => {
    setDetails(false);
    e.currentTarget.parentElement.previousElementSibling.classList.remove("hideCards");
  }

  let internshipCards = internships.map((internship) => {
    return <InternshipCard internship={internship} handleLikeCallback={handleLikeCallback} key={internship.link} includeDetails={setDetails} detailCallback={setInfo} />
  });

  /**
   * If details is true, show the detail of the selected internship.
   * Otherwise, show all the internships from the data.
   */
  if (details) {
    return (
      <div className="intern-details">
        <FontAwesomeIcon icon={faChevronLeft} onClick={handleBack} className='detail-back' aria-label="back" />
        <div>
          <InternshipDetail currentDetail={detailInfo} handleLikeCallback={handleLikeCallback} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cards">
        {internshipCards}
      </div>
    );
  }
}

export default InternshipList;