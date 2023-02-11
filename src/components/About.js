import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export function About({postedNum}) {
    return(
      <div className="about">
        {/*  <!-- WELCOME --> */}
        <div className="welcome">
          <div className="text-box">
            <h1>Welcome to InterNet</h1>
            <h2>an easier solution to finding tech internships for undergraduate students</h2>
            <Link to="/login" type="button" aria-label="Join Now" className="btn btn-info mt-3">Join Now</Link>
          </div>
          <img src="img/main.png" alt="a person sitting at a table working on their laptop"/>
        </div>

        {/* <!-- MISSION --> */}
        <div className="mission">
          <img src="img/laptop.png" alt="illustration of person sitting and looking at laptop"/>
          <div className="text-box">
            <h3>Our Mission</h3>
            <p>Finding internships can be difficult, especially for undergraduate students who are
              already busy with schoolwork. To mitigate the stress that these students feel, we
              developed a solution for students to easily find tech internships. We want to create
              a fun and interactive way for students to find an internship that matches their
              interests and abilities. Based on the information the applicant inputs into their
              profile, our system will match the applicant with five internships daily. In this
              way, students won’t have to worry about manually finding internships that fit their
              criterias. Through InterNet, we aim to create a positive experience for
              these students rather than letting internship searching be a burden and to relieve
              the stress of these students during these times. </p>
          </div>
        </div>

        {/* <!-- BENEFITS --> */}
        <div className="benefits">
          <div className="text-box">
            <h3>Benefits</h3>
            <p>Using InterNet comes with lots of benefits</p>
          </div>

          <div className="benefit-cards">
            <div className="benefit-card">
              <img src="img/benefit1.png" alt="random blob to represent application process"/>
              <p>Easy Application Process</p>
            </div>

            <div className="benefit-card">
              <img src="img/benefit2.png" alt="random blob to represent matching system"/>
              <p>Matching System</p>
            </div>

            <div className="benefit-card">
              <img src="img/benefit3.png" alt="random blob to represent contacting recruiters"/>
              <p>Daily Matches</p>
            </div>

          </div>
          <h4>Total Internship Posted: {postedNum}</h4>
        </div>

        <div className="accolades">
          <h3>Hear from our users!</h3>
          <Carousel interval={null}>
                <Carousel.Item>
                  <div className="user-card">

                    {/* <!--This is left flex box--> */}
                    <div className="profile-pic">
                      <img src="img/char1.png" alt="user 1" />
                    </div>

                    {/* <!--This is right text box--> */}
                    <div className="user-des">
                      <h2>UX Design Summer Internship</h2>
                      <p>
                        "Thanks to InterNet, I was able to find an internship within a month! The process was very easy and organized!"
                      </p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="user-card">

                    {/* <!--This is left flex box--> */}
                    <div className="profile-pic">
                      <img src="img/char2.png" alt="user 2" />
                    </div>

                    {/* <!--This is right text box--> */}
                    <div className="user-des">
                      <h2>Data Science Summer Internship</h2>
                      <p>
                        "The best thing ever! I was matched with the perfect internship within a week"
                      </p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="user-card">

                    {/* <!--This is left flex box--> */}
                    <div className="profile-pic">
                      <img src="img/char3.png" alt="user 3" />
                    </div>

                    {/* <!--This is right text box--> */}
                    <div className="user-des">
                      <h2>Software Engineering Summer Internship</h2>
                      <p>
                        "After a couple matches, I found an internship I really enjoyed! The application process
                        was really easy and took less than a week to hear back from the company."
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
}