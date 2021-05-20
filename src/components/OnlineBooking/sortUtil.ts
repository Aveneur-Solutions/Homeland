import IFlat from "../../models/unit";

interface PriceRange {
  priceRange1: boolean;
  priceRange2: boolean;
  priceRange3: boolean;
}

interface SizeRange {
  sizeRange1: boolean;
  sizeRange2: boolean;
  sizeRange3: boolean;
  sizeRange4: boolean;
}

const pushToArray = (
  flats: IFlat[],
  sortedUnits: IFlat[],
  sortingFactor: string,
  minRange: number,
  maxRange: number
) => {
  let temp = flats.filter((flat) => {
    if (sortingFactor === "price") {
      return flat.price <= maxRange && flat.price >= minRange;
    }
    if (sortingFactor === "size") {
      return flat.size <= maxRange && flat.size >= minRange;
    }
  });
  temp.forEach((flat) => {
    let exist = sortedUnits.find((su) => su.id === flat.id);
    if (!exist) sortedUnits.push(flat);
  });
};

const sortFlats = (
  flats: IFlat[],
  priceRange: PriceRange,
  sizeRange: SizeRange
) => {
  let sortedUnits: IFlat[] = [];

  // sort according to price
  if (priceRange.priceRange1) {
    pushToArray(flats, sortedUnits, "price", 3000000, 3199999);
  }
  if (priceRange.priceRange2) {
    pushToArray(flats, sortedUnits, "price", 3200000, 3399999);
  }
  if (priceRange.priceRange3) {
    pushToArray(flats, sortedUnits, "price", 3400000, 3600000);
  }

  // sort according to price
  if (sizeRange.sizeRange1) {
    pushToArray(flats, sortedUnits, "size", 900, 920);
  }
  if (sizeRange.sizeRange2) {
    pushToArray(flats, sortedUnits, "size", 921, 950);
  }
  if (sizeRange.sizeRange3) {
    pushToArray(flats, sortedUnits, "size", 951, 980);
  }
  if (sizeRange.sizeRange4) {
    pushToArray(flats, sortedUnits, "size", 981, 1000);
  }
  return sortedUnits;
};

export default sortFlats;
