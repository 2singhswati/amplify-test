import React from "react";
import office from './office.jpg';



function About() {
  return (
    <div className="home">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src={office}
            alt=""
          />
        </div>
        <div class="col-lg-5">
          <h1 class="font-weight-light">About EZMeet</h1>
          <p>
            Indoor navigation has never been easier!! Welcome to EZMeet, a first of its kind indoor navigation system that serves two purposes: Administrators can upload floor plans and have 
            it turn to an indoor map that makes it easier to navigate in enclosed spaces and Employees can use it to find their respective offices and navigate within those
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}




export default About;

        