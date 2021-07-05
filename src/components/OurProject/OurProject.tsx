import { useContext } from "react";
import "./booking.scss";
import "./project.css";
import { Container, Grid, Image, Sticky } from "semantic-ui-react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const OurProject = () => {
  const isMobileView = useMediaQuery({ query: "(max-device-width: 600px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const rootStore = useContext(RootStoreContext);
  const {getBuildingList,buildingList,currentBuilding,setCurrentBuilding, emptyCurrentBuilding} = rootStore.projectStore;
  useEffect(() => {
    Aos.init({ duration: 1000 });
    getBuildingList();
  }, [getBuildingList]);
  return (
    <div className="main-card-container">
      {!isTabletOrMobileDevice && !isMobileView ? (
        // DESKTOP RESPONSIVE CODE IS HERE
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
                              <div>
                                <Image
                                  className="building-img"
                                  src={
                                    "https://www.homeland.aveneur.com/Images" +
                                    building.image
                                  }
                                />
                                <p
                              onClick={() => setCurrentBuilding(building)}
                              className="building-view"
                              >View
                              </p>
                                <p
                                  style={{
                                    fontSize: "1.3rem",
                                    textAlign: "center",
                                    padding: "2%"
                                  }}
                                >
                                  Building Number {building.buildingNumber}
                                </p>
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
                  <div style={{ width: "40%" }}>
                    <Sticky>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <strong>
                          Building Number: {currentBuilding.buildingNumber}
                        </strong>
                        <strong style={{ color: 'green' }}>
                          Available{" "}
                          {
                            currentBuilding?.flats.filter(
                              (x) => !x.isBooked && !x.isSold
                            ).length
                          }
                        </strong>
                        <strong style={{ color: "red" }}>
                          Booked{" "}
                          {
                            currentBuilding?.flats.filter((x) => x.isBooked)
                              .length
                          }
                        </strong>
                      </div>
                    </Sticky>
                    <div
                      style={{
                        width: "95%",
                        height: "75vh",
                        overflowY: "auto",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <ListUnits units={currentBuilding?.flats!} />
                      </div>
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
                        <p
                          onClick={() => setCurrentBuilding(building)}
                          className="building-view"
                        >
                          View
                        </p>
                        <p
                          style={{
                            fontSize: "1.3rem",
                            textAlign: "center",
                            padding: "2%",
                          }}
                        >
                          Building Number {building.buildingNumber}
                        </p>
                      </div>
                    );
                  })}
                </Grid.Column>
              </div>
              <Grid.Column tablet={10}>
                {!currentBuilding ? (
                  <SvgComponent2 data-aos="fade-up" />
                ) : (
                  <>
                    <Sticky>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <strong>
                          Building Number: {currentBuilding.buildingNumber}
                        </strong>
                        <strong style={{ color: "green" }}>
                          Available{" "}
                          {
                            currentBuilding?.flats.filter(
                              (x) => !x.isBooked && !x.isSold
                            ).length
                          }
                        </strong>
                        <strong style={{ color: "red" }}>
                          Booked{" "}
                          {
                            currentBuilding?.flats.filter((x) => x.isBooked)
                              .length
                          }
                        </strong>
                      </div>
                    </Sticky>
                    <div style={{ height: "90vh", overflowY: "auto" }}>
                      <ListUnits units={currentBuilding?.flats!} />
                    </div>
                  </>
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
              <Grid.Column width={16}>
                {!currentBuilding ? (
                  <div
                    style={{ width: "100%", height: "76vh", overflowY: "auto" }}
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
                            <p
                              onClick={() => setCurrentBuilding(building)}
                              className="building-view"
                            >
                              View
                            </p>
                            <p
                              style={{
                                fontSize: "1.3rem",
                                textAlign: "center",
                                padding: "2%",
                              }}
                            >
                              Building Number {building.buildingNumber}
                            </p>
                          </div>
                        );
                      })}
                    </Grid.Column>
                  </div>
                ) : (
                  <>
                    <div style={{ cursor: "pointer" }}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        onClick={() => emptyCurrentBuilding()}
                      />
                    </div>
                    <Sticky>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <strong>
                          Building Number: {currentBuilding.buildingNumber}
                        </strong>
                        <strong style={{ color: "green" }}>
                          Available{" "}
                          {
                            currentBuilding?.flats.filter(
                              (x) => !x.isBooked && !x.isSold
                            ).length
                          }
                        </strong>
                        <strong style={{ color: "red" }}>
                          Booked{" "}
                          {
                            currentBuilding?.flats.filter((x) => x.isBooked)
                              .length
                          }
                        </strong>
                      </div>
                    </Sticky>
                    <div
                      style={{
                        width: "100%",
                        height: "70vh",
                        overflowY: "auto",
                      }}
                    >
                      <ListUnits units={currentBuilding?.flats!} />
                    </div>
                  </>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default observer(OurProject);
