import React, { useContext } from "react";
import "./booking.scss";
import "./project.css";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { ourProject } from "./buildings";
import ProjectStore from "./ProjectStore";
import { observer } from "mobx-react-lite";
import SvgComponent2 from "./SvgProj";
import BuildingShowcase from "./BuildingShowcase";
import { Link, Element } from "react-scroll";

const OurProject = () => {
  const store = useContext(ProjectStore);

  const { setNothingVisibility, setImageVisibility, showImage, showNothing } =
    store;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="project_section1">
        <figure id="showcase">
          <section className="sectionsproject"></section>
          <section className="sectionsproject"></section>
          <section className="sectionsproject"></section>
          <section className="sectionsproject"></section>
        </figure>
        <div className="arrowproj" data-aos="fade-up">
          <Link
            to="firstInsideContainer"
            spy={true}
            smooth={true}
            duration={250}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/DownArrow.png"}
              alt=""
            />
          </Link>
        </div>
      </div>
        <Element name="firstInsideContainer">
      <div className="projectheading" data-aos="fade-down">
        <h1>Check out our projects</h1>
      </div>
      <div className="projectheading">
        <div className="lineproject"></div>
      </div>
      <div className="buildingcontainer">
          <Grid columns={2}>
            <div className="building">
              <Grid columns={3} padded data-aos="fade-up">
                {ourProject.map((buildno, index) => {
                  return (
                    <div className="widthoftuples">
                    <div key={index} className="buildTuples">
                      <Grid.Column className="buildTuples1" padded>
                        <div onClick={() => setImageVisibility()}>
                          <Image src={process.env.PUBLIC_URL + buildno.url} />
                          <h4>{buildno.txt}</h4>
                        </div>
                      </Grid.Column>
                    </div>
                    </div>
                  );
                })}
              </Grid>
            </div>
            {showNothing ? (
              <div className="building2">
                <SvgComponent2 data-aos="fade-up" />
              </div>
            ) : (
              <BuildingShowcase />
            )}
          </Grid>

      </div>

      </Element>
    </div>
  );
};

export default observer(OurProject);
