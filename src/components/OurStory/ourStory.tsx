/* eslint-disable react/jsx-pascal-case */
import Gallery_2 from "./2_Gallery";
import "./ourStory.css";
import { ourStory } from "./storyInfo";
import SvgComponent1 from "./logosvg1";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Storytexts from "./Storytexts";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const OurStory = () => {
  const containerRef = useRef(null);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const settingsStory = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              // ... all available Locomotive Scroll instance options
            }}
            watch={
              [
                //...all the dependencies you want to watch to update the scroll
              ]
            }
            containerRef={containerRef}
          >
            <main
              data-scroll-container
              data-scroll
              data-scroll-speed="10"
              data-scroll-position="bottom"
              data-scroll-delay="0.05"
              ref={containerRef}
              className="bgofmain"
            >
              <div className="main-story">
                <div className="our-story">
                  {ourStory.map((story, index) => {
                    return (
                      <div
                        className="our-story-content"
                        key={index}
                        data-aos="fade-up"
                      >
                        <h2 style={{ color: "goldenrod" }}>{story.title}</h2>
                        <h4 style={{ width: "20vw" }}>{story.para}</h4>
                      </div>
                    );
                  })}
                </div>
                <div className="bgblack" data-aos="fade-left">
                  <Gallery_2 />
                </div>
              </div>
              <div className="mandv">
                <div
                  data-scroll
                  data-scroll-speed="20"
                  data-scroll-position="top"
                  data-scroll-direction="horizontal"
                  ref={containerRef}
                  className="Mission"
                >
                  <h1>Our Mission</h1>
                  <p>
                    HOMELAND has the client interest on top priority. It is not
                    just committed to offer high quality yet affordable housing
                    but also ensures that the entire acquisition process is fair
                    and equitable for the clients. It will strive to ensure that
                    the clients can truly appreciate the value proposition of
                    the entire offering, thus establishing a long-term
                    relationship with the brand based on happiness and trust.
                  </p>
                </div>
                <div
                  // data-scroll-container
                  data-scroll
                  data-scroll-speed="-20"
                  data-scroll-position="top"
                  data-scroll-direction="horizontal"
                  ref={containerRef}
                  className="Vision"
                >
                  <h1>Our Vision</h1>
                  <p>
                    God Willing HOMELAND will continue to develop affordable
                    housing projects across the country with the goal of greater
                    social inclusion in the housing market thus propagating its
                    philosophy of “togetherness is happiness.”
                  </p>
                </div>
              </div>
            </main>
          </LocomotiveScrollProvider>
          <div className="logoContainer">
            <div className="main-logo">
              <SvgComponent1 />
            </div>
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
