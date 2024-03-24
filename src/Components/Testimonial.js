import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Customers Are Saying</h1>
        <p className="primary-text">
        EasyTrip has completely changed the way I travel. With their user-friendly platform and diverse transportation options, planning my trips has never been easier. I highly recommend EasyTrip to anyone looking for a stress-free travel experience.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Thanks to EasyTrip, I was able to book my dream vacation with just a few clicks. Their fast and reliable delivery service ensured that I arrived at my destination on time and in comfort. I can't wait to use EasyTrip for my next adventure!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Smith</h2>
      </div>
    </div>
  );
};

export default Testimonial;