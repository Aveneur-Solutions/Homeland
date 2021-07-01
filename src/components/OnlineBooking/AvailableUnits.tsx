import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Button, Grid } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";
import { useMediaQuery } from "react-responsive";
import FilterCard from "./FilterCard";
import sortFlats from "./sortUtil";
import IFlat from "../../models/unit";
import UnitList from "./UnitList";
import { history } from "../..";
import { observer } from "mobx-react-lite";

const AvailableUnits = () => {
  const rootStore = useContext(RootStoreContext);
  const { setUnitSearch, searchUnit } = rootStore.navStore;
  const { flats, listflats, selectedFlats } = rootStore.flatStore;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const [sortedFlats, setSortedFlats] = useState<IFlat[]>([]);

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
    listflats();
    return(() => {

    })
  }, [listflats]);

  return (
    <div className="projectmainbg">
      {/* <ProjectGallery /> */}
      <div className="projectbg" style={{ position: "relative" }}>
        {!isTabletOrMobileDevice ? (
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
              {!searchUnit ? (
                <UnitList
                  sortedFlats={flats.filter((flat) => !flat.isBooked)}
                />
              ) : (
                <UnitList sortedFlats={sortedFlats} />
              )}
            </Grid.Column>
          </Grid>
        ) : (
          <div style={{ marginTop: 30 }}>
            <FilterCard
              onFormSubmit={onFormSubmit}
              onPriceChange={onPriceChange}
              onSizeChange={onSizeChange}
              priceRange={priceRange}
              sizeRange={sizeRange}
            />
            {!searchUnit ? (
              <UnitList sortedFlats={flats.filter((flat) => !flat.isBooked)} />
            ) : (
              <UnitList sortedFlats={sortedFlats} />
            )}
          </div>
        )}
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
              pointerEvents: "auto"
            }}
            disabled={selectedFlats.length === 0}
            onClick={() => {
              console.log("kisu");
              history.push("/mainInfo");
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(AvailableUnits);
