import React, { useState } from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  const [location, setLocation] = useState("");

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCftyOGeTYKsYetsH3zED4ryJZ-TPSUaew&q=${encodeURIComponent(location || "Real Estate")}`;

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover the<br />
              Most Suitable <br /> Property for you
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker
              className="icon"
              color="var(--blue)"
              size={50}
              style={{ cursor: "pointer" }}
            />
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1700} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={80} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>

        {/* Right side (Google Map embedded) */}
        <div className="flexColEnd hero-right">
          <div className="image-container">
            <iframe
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
