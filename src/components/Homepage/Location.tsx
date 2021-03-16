import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="yell1">
      <div className="proximity">
        <p>
          20 minutes north of Gazipur Chowrasta & close to Rajendrapur Cant. and
          also about metro plans
        </p>
      </div>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29160.242285263106!2d90.40015702570402!3d23.994707613130117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1615707944917!5m2!1sen!2sbd"
        loading="lazy"
        className="map"
      ></iframe>
    </div>
  );
};

export default Location;
