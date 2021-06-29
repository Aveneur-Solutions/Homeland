import { useContext } from "react";
import "./booking.scss";
import "./project.css";
import { Container, Grid, Image } from "semantic-ui-react";
// import useProgressiveImg from "./UseProgressiveImg"
import { useEffect } from "react";
import Aos from "aos";
import { observer } from "mobx-react-lite";
import SvgComponent2 from "./SvgProj";
// import BuildingShowcase from "./BuildingShowcase";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import { RootStoreContext } from "../../stores/rootStore";
import ListUnits from "./ListUnits";

const OurProject = () => {
  const isMobileView = useMediaQuery({ query: "(max-device-width: 600px)" });
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
      {!isTabletOrMobileDevice && !isMobileView ? (
        <>
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
                                  src={
                                    "https://www.homeland.aveneur.com/Images" +
                                    building.image
                                  }
                                />
                                <h4>
                                  Building Number {building.buildingNumber}
                                </h4>
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
                  <div
                    style={{
                      width: "40%",
                      height: "100vh",
                      overflowY: "auto",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <ListUnits units={currentBuilding?.flats!} />
                    </div>
                  </div>
                )}
              </Grid>
            </div>
          </Element>
        </>
      ) : isTabletOrMobileDevice && !isMobileView ? (
        // TABLET RESPONSIVE CODE IS HERE
        <Container fluid>
          <div className="projectheadingm" data-aos="fade-down">
            <h1>Check out our projects</h1>
          </div>
          <div className="projectheading">
            <div className="lineproject"></div>
          </div>
          <Grid>
            <Grid.Row>
              <div
                style={{ width: "37%", height: "90vh", overflowY: "scroll" }}
              >
                <Grid.Column tablet={6}>
                  {buildingList.map((building, index) => {
                    return (
                      <div
                        key={index}
                        className="buildTuples1"
                        onClick={() => setCurrentBuilding(building)}
                      >
                        <Image
                          src={
                            "https://www.homeland.aveneur.com/Images" +
                            building.image
                          }
                        />
                        <h4>Building Number : {building.buildingNumber}</h4>
                      </div>
                    );
                  })}
                </Grid.Column>
              </div>
              <Grid.Column tablet={10}>
                {!currentBuilding ? (
                  <SvgComponent2 data-aos="fade-up" />
                ) : (
                  <div style={{ height: "90vh", overflowY: "auto" }}>
                    <ListUnits units={currentBuilding?.flats!} />
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      ) : (
        // MOBILE RESPONSIVE CODE IS HERE
        <Container fluid>
          <div className="projectheadingm" data-aos="fade-down">
            <h1>Check out our projects</h1>
          </div>
          <div className="projectheading">
            <div className="lineproject"></div>
          </div>
          <Grid>
            <Grid.Row>
              <div
                style={{ width: "100%", height: "76vh", overflowY: "scroll" }}
              >
                <Grid.Column>
                  {buildingList.map((building, index) => {
                    return (
                      <div
                        key={index}
                        className="buildTuples1"
                        onClick={() => setCurrentBuilding(building)}
                      >
                        <Image
                          src={
                            "https://www.homeland.aveneur.com/Images" +
                            building.image
                          }
                        />
                        <h4>Building Number : {building.buildingNumber}</h4>
                      </div>
                    );
                  })}
                </Grid.Column>
              </div>
              <Grid.Column tablet={16}>
                {!currentBuilding ? (
                  <SvgComponent2 data-aos="fade-up" />
                ) : (
                  <div style={{ width: "100%", height: "70vh", overflowY: "auto" }}>
                    <ListUnits units={currentBuilding?.flats!} />
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default observer(OurProject);
