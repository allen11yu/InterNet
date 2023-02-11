import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { faHeart as filledHeart, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MatchInternshipCard({internship, handleLikeCallback, includeDetails, detailCallback}) {
  let likeOrDislike = outlinedHeart;
  if(internship.liked) {
    likeOrDislike = filledHeart;
  } else {
    likeOrDislike = outlinedHeart;
  }

  /**
   * Shows the deatail of an internship.
   */
  const handleDetail = (event) => {
    includeDetails(true);
    detailCallback(internship);
  }

  return (
    <div className="internship-card">
      {/* <!--This is left flex box--> */}
      <div className="internship-company">
        <img src={internship.img} alt="company logo" />
      </div>

      {/* <!--This is right text box--> */}
      <div className="internship-detail">
        <div className="internship-des">
          <h2>{internship.role}</h2>
          <p>{internship.description}</p>
        </div>

        <div className="internship-action">
          <div><a href={internship.link} target='_blank' rel="noreferrer">Apply</a></div>
          <div onClick={handleDetail}>Explore</div>
          <div onClick={() => {
              handleLikeCallback(internship);
              }}><FontAwesomeIcon icon={likeOrDislike} className='heart'/>
          </div>
        </div>
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
          <h2>{currentDetail.company} | {currentDetail.location}</h2>
          <h3>{currentDetail.role}</h3>
          <h3>{currentDetail.time} </h3>
          <div className="text-center">
            <a href={currentDetail.link} target='_blank' rel="noreferrer"><button type="button" aria-label="Apply" className="btn btn-info m-3">Apply</button></a>
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

function MatchInternshipList({internships, handleLikeCallback}) {
  const [details, setDetails] = useState(false);
  const [detailInfo, setInfo] = useState(null);

  /**
   * Handle back button feature, reveal the matched internships.
   */
  const handleBack = () => {
    setDetails(false);
  }

  let internshipCards = internships.map((internship) => {
    return (
      <Carousel.Item key={internship.link}>
        <MatchInternshipCard internship={internship} handleLikeCallback={handleLikeCallback} key={internship.link} includeDetails={setDetails} detailCallback={setInfo} />
      </Carousel.Item>
    );
  });

  /**
   * If details is true, show the detail of the selected internship.
   * Otherwise, show all matched internships.
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
      <Carousel variant="dark" interval={null}>
        {internshipCards}
      </Carousel>
    );
  }
}

export default MatchInternshipList;