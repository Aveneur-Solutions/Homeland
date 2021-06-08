import ProjectGallery from "./ProjectGallery";
import { Grid } from "semantic-ui-react";
import Card from "./Card/Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import UnitList from "./UnitList";
import AvailableUnits from "./AvailableUnits";
import IFlat from "../../models/unit";
import sortFlats from "./sortUtil";
import { useMediaQuery } from "react-responsive";
import "./booking.css";

const OurProject = () => {
  const rootStore = useContext(RootStoreContext);
  const { featured, setUnitSearch, setFeatured, searchUnit } =
    rootStore.navStore;
  const { flats, listflats } = rootStore.flatStore;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

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

  return (
    <div className="projectmainbg">
      <ProjectGallery />
      <div className="projectbg">
        {!isTabletOrMobileDevice ? (
          <Grid>
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
                  <Card featuredFlats={getFeaturedUnits()} />
                  <AvailableUnits />
                </>
              )}
              {searchUnit && <UnitList sortedFlats={sortedFlats} />}
            </Grid.Column>
          </Grid>
        ) : (
          <div>
            <FilterCard
              onFormSubmit={onFormSubmit}
              onPriceChange={onPriceChange}
              onSizeChange={onSizeChange}
              priceRange={priceRange}
              sizeRange={sizeRange}
            />
            {featured && <Card featuredFlats={getFeaturedUnits()} />}
            {searchUnit && <UnitList sortedFlats={sortedFlats} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(OurProject);
