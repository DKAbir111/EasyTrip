import React from "react";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: DeliveryMeals,
      title: "Pick Your Destination",
      text: "Select your desired destination from our extensive list of travel options. Whether you're craving an urban adventure or a serene getaway, EasyTrip has you covered.",
    },
    {
      image: ChooseMeals,
      title: "Choose Your Transportation",
      text: "Lorem Browse through our wide range of transportation options, including buses, truck launches, and ships. With EasyTrip, you have the flexibility to choose the mode of transportation that best suits your travel preferences.ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Book Your Journey",
      text: "Once you've selected your destination and transportation, simply book your journey with ease through our user-friendly platform. Say goodbye to long queues and complicated booking processes—EasyTrip makes planning your trip a breeze.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Explore the EasyTrip Journey</h1>
        <p className="primary-text">
        Sit back, relax, and let EasyTrip take care of the rest. Our fast and reliable delivery service ensures that you reach your destination on time and in comfort, allowing you to focus on creating unforgettable memories along the way.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;