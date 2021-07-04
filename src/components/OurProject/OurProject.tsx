import { useContext } from "react";
import "./booking.scss";
import "./project.css";
import { Grid, Image } from "semantic-ui-react";
// import useProgressiveImg from "./UseProgressiveImg"
import { useEffect } from "react";
import Aos from "aos";
import { observer } from "mobx-react-lite";
import SvgComponent2 from "./SvgProj";
import BuildingShowcase from "./BuildingShowcase";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import { RootStoreContext } from "../../stores/rootStore";

const OurProject = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const rootStore = useContext(RootStoreContext);
  const {getBuildingList,buildingList,currentBuilding,setCurrentBuilding} = rootStore.projectStore;

  useEffect(() => {
    Aos.init({ duration: 1000 });
    getBuildingList();
  }, [getBuildingList]);
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>

        <div>
          
          {/* <div className="project_section1">
            <figure className="showcase">
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
          </div> */}
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
                    {buildingList.map((building, index) => {
                      return (
                        <div className="widthoftuples">
                          <div key={index} className="buildTuples">
                            <Grid.Column className="buildTuples1" padded>
                              <div onClick={() => setCurrentBuilding(building)}>
                                <Image
                                  src={"https://www.homeland.aveneur.com/Images" + building.image}
                                />
                                <h4>Building Number {building.buildingNumber}</h4>
                              </div>
                            </Grid.Column>
                          </div>
                        </div>
                      );
                    })}
                  </Grid>
                </div>
                {!currentBuilding ? (
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
        </>
// MOBILE RESPONSIVE CODE IS HERE
      ) : (
        <div>
          {/* <div className="project_sectionm">
            <figure className="showcasem">
              <section className="sectionsproject"></section>
              <section className="sectionsproject"></section>
              <section className="sectionsproject"></section>
              <section className="sectionsproject"></section>
            </figure>
            <div className="arrowprojm" data-aos="fade-up">
              <Link
                to="firstInsideContainer"
                spy={true}
                smooth={true}
                duration={250}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/DownArrow.png"}
                  alt=""
                  // style={{
                  //   filter: blur ? "blur(20px)" : "none",
                  //   transition: blur ? "none" : "filter 0.3s ease-out"
                  // }}
                />
              </Link>
            </div>
          </div> */}
          <Element name="firstInsideContainer">
            <div className="projectheadingm" data-aos="fade-down">
              <h1>Check out our projects</h1>
            </div>
            <div className="projectheading">
              <div className="lineproject"></div>
            </div>
            <div className="buildingcontainerm">
              <Grid columns={2}>
                <div className="buildingm">
                  <Grid columns={1} padded data-aos="fade-up">
                    {buildingList.map((building, index) => {
                      return (
                        <div className="widthoftuplesm">
                          <div key={index} className="buildTuples">
                            <Grid.Column className="buildTuples1" padded>
                              <div onClick={() => setCurrentBuilding(building)}>
                                <Image
                                   src={"https://www.homeland.aveneur.com/Images" + building.image}
                                />
                                <h4>Building Number : {building.buildingNumber}</h4>
                              </div>
                            </Grid.Column>
                          </div>
                        </div>
                      );
                    })}
                  </Grid>
                </div>
                {!currentBuilding ? (
                  <div className="building2m">
                    <SvgComponent2 data-aos="fade-up" />
                  </div>
                ) : (
                  <BuildingShowcase />
                )}
              </Grid>
            </div>
          </Element>
        </div>
      )}
    </>
  );
};

export default observer(OurProject);
