import ProjectGallery from "./ProjectGallery";
import { Grid } from "semantic-ui-react";
import Card from "./Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import UnitList from "./UnitList";
import IFlat from "../../models/unit";
import sortFlats from "./sortUtil";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
const OurProject = () => {
  const containerRef = useRef(null);
  const rootStore = useContext(RootStoreContext);
  const { featured, setUnitSearch, searchUnit } = rootStore.navStore;
  const { flats, listflats } = rootStore.flatStore;
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
  }, [listflats]);

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
                  {featured && <Card featuredFlats={flats} />}
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
                {featured && <Card featuredFlats={flats} />}
                {searchUnit && <UnitList sortedFlats={sortedFlats} />}
              </div>
            )}
          </div>
    </div>
  );
};

export default observer(OurProject);