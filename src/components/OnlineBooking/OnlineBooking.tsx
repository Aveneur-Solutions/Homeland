import { Button, Grid } from "semantic-ui-react";
import Cards from "./Cards";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import UnitList from "./UnitList";
import IFlat from "../../models/unit";
import sortFlats from "./sortUtil";
import { useMediaQuery } from "react-responsive";
import "./booking.css";
import { Link } from "react-router-dom";
import { history } from "../..";

const OurProject = () => {
  const rootStore = useContext(RootStoreContext);
  const { featured, setUnitSearch, setFeatured, searchUnit } =
    rootStore.navStore;
  const { flats, listflats, selectedFlats } = rootStore.flatStore;

  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [sortedFlats, setSortedFlats] = useState<IFlat[]>([]);
  // const [featuredFlats, setFeaturedFlats] = useState<IFlat[]>([]);

  const [priceRange, setPriceRange] = useState({
    priceRange1: false,
    priceRange2: false,
    priceRange3: false,
  });

  const [sizeRange, setSizeRange] = useState({
    sizeRange1: false,
    sizeRange2: false,
    sizeRange3: false,
    sizeRange4: false,
  });

  const onPriceChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setPriceRange({
      ...priceRange,
      [name]: checked,
    });
  };

  const onSizeChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setSizeRange({
      ...sizeRange,
      [name]: checked,
    });
    console.log(sizeRange);
  };

  const onFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // sorting the list of flats by a custom function
    let sortedUnits = sortFlats(flats, priceRange, sizeRange);

    setSortedFlats(sortedUnits);
    setUnitSearch();
  };

  useEffect(() => {
    setFeatured();
    listflats();
  }, [listflats, setFeatured]);

  const getFeaturedUnits = () => {
    let flatsCopy = flats.slice();
    let sortedFlats = flatsCopy.sort((a, b) => a.price - b.price);
    let featured = sortedFlats.slice(0, 3);
    return featured;
  };

  const getAvailableUnits = () => {
    let flatsCopy = flats.slice();
    let availableUnits = flatsCopy.filter(
      (flat) => !flat.isBooked && !flat.isSold
    );
    return availableUnits.slice(0, 3);
  };

  return (
    <div className="projectmainbg">
      {/* <ProjectGallery /> */}
      <div className="projectbg" style={{ position: "relative" }}>
        {!isTabletOrMobile && !isMobileScreen ? (
          <Grid style={{ minHeight: "89vh" }}>
            <Grid.Column width={3}>
              <FilterCard
                onFormSubmit={onFormSubmit}
                onPriceChange={onPriceChange}
                onSizeChange={onSizeChange}
                priceRange={priceRange}
                sizeRange={sizeRange}
              />
            </Grid.Column>
            <Grid.Column width={13}>
              {featured && (
                <>
                  <Cards
                    featuredFlats={getFeaturedUnits()}
                    header="Featured Units"
                  />
                  <Cards
                    featuredFlats={getAvailableUnits()}
                    header="Available Units"
                  />
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      height: 50,
                    }}
                  >
                    <Link
                      to="/available-units"
                      className="available-units-list"
                    >
                      VIEW ALL <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </>
              )}
              {searchUnit && <UnitList sortedFlats={sortedFlats} />}
            </Grid.Column>
          </Grid>
        ) : isTabletOrMobile && !isMobileScreen ? (
          <div style={{ marginTop: 30 }}>
            <FilterCard
              onFormSubmit={onFormSubmit}
              onPriceChange={onPriceChange}
              onSizeChange={onSizeChange}
              priceRange={priceRange}
              sizeRange={sizeRange}
            />
            {featured && (
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Cards
                      featuredFlats={getFeaturedUnits()}
                      header="Featured Units"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Cards
                      featuredFlats={getAvailableUnits()}
                      header="Available Units"
                    />
                  </Grid.Column>
                </Grid.Row>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    height: 50,
                  }}
                >
                  <Link to="/available-units" className="available-units-list">
                    VIEW ALL <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </Grid>
            )}
            {searchUnit && <UnitList sortedFlats={sortedFlats} />}
          </div>
        ) : (
          <div style={{ marginTop: 30 }}>
            <FilterCard
              onFormSubmit={onFormSubmit}
              onPriceChange={onPriceChange}
              onSizeChange={onSizeChange}
              priceRange={priceRange}
              sizeRange={sizeRange}
            />
            {featured && (
              <Grid>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Cards
                      featuredFlats={getFeaturedUnits()}
                      header="Featured Units"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Cards
                      featuredFlats={getAvailableUnits()}
                      header="Available Units"
                    />
                  </Grid.Column>
                </Grid.Row>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    height: 50,
                  }}
                >
                  <Link to="/available-units" className="available-units-list">
                    VIEW ALL <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </Grid>
            )}
            {searchUnit && <UnitList sortedFlats={sortedFlats} />}
          </div>
        )}
        {searchUnit && (
          <div
            className="projectbottom buttondiv"
            style={{ pointerEvents: "none" }}
          >
            <Button
              className="nextbutton"
              style={{
                backgroundColor: "#1e212d",
                color: "goldenrod",
                width: 60,
                height: 60,
                borderRadius: "100px",
                pointerEvents: "auto",
              }}
              disabled={selectedFlats.length === 0}
              onClick={() => history.push("/mainInfo")}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(OurProject);
