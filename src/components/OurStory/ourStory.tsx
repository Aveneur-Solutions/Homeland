/* eslint-disable react/jsx-pascal-case */
import Gallery_2 from "./2_Gallery";
import "./ourStory.css";
import { ourStory } from "./storyInfo";
import SvgComponent1 from "./logosvg1";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Storytexts from "./Storytexts";

const OurStory = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div></div>
          <div className="main-story">
            <div className="our-story">
              {ourStory.map((story, index) => {
                return (
                  <div
                    className="our-story-content container-fluid"
                    key={index}
                    data-aos="fade-down"
                  >
                    <h2 style={{ color: "goldenrod" }}>{story.title}</h2>
                    <h4 style={{ width: "20vw" }}>{story.para}</h4>
                  </div>
                );
              })}
            </div>
            <div className="bgblack" aos-init aos-animate>
              <Gallery_2 />
            </div>
          </div>
          <div className="mandv" data-aos="fade-up">
            <div className="Mission">
              <h1>Our Mission</h1>
              <p>
                HOMELAND has the client interest on top priority. It is not just
                committed to offer high quality yet affordable housing but also
                ensures that the entire acquisition process is fair and
                equitable for the clients. It will strive to ensure that the
                clients can truly appreciate the value proposition of the entire
                offering, thus establishing a long-term relationship with the
                brand based on happiness and trust.
              </p>
            </div>
          </div>
          <div className="mandv" data-aos="fade-up">
            <div className="Vision">
              <h1>Our Vision</h1>
              <p>
                God Willing HOMELAND will continue to develop affordable housing
                projects across the country with the goal of greater social
                inclusion in the housing market thus propagating its philosophy
                of “togetherness is happiness.”
              </p>
            </div>
          </div>

          <div className="logoContainer" data-aos="fade-up">
            <div className="main-logo">
              <SvgComponent1 />
            </div>
          </div>
          <div className="projectbutton-container">
            <button className="projectbutton"> Look At Our Projects</button>
          </div>
        </>
      ) : (
        <>
          <div className="main-story-mob">
            <div className="bgblack" data-aos="fade-down">
              <Gallery_2 />
            </div>
            <Storytexts />
          </div>
          <div className="mandvm" data-aos="fade-up">
            <div className="Missionm">
              <h1>Our Mission</h1>
              <p>
                HOMELAND has the client interest on top priority. It is not just
                committed to offer high quality yet affordable housing but also
                ensures that the entire acquisition process is fair and
                equitable for the clients. It will strive to ensure that the
                clients can truly appreciate the value proposition of the entire
                offering, thus establishing a long-term relationship with the
                brand based on happiness and trust.
              </p>
            </div>
          </div>
          <div className="mandvm" data-aos="fade-up">
            <div className="Missionm">
              <h1>Our Vision</h1>
              <p>
                God Willing HOMELAND will continue to develop affordable housing
                projects across the country with the goal of greater social
                inclusion in the housing market thus propagating its philosophy
                of “togetherness is happiness.”
              </p>
            </div>
          </div>
          
          <div className="logoContainer">
            <div className="main-logo">
              <SvgComponent1 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OurStory;
