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

const sortFlats = (flats: IFlat[], priceRange: PriceRange, sizeRange: SizeRange) => {
  let sortedUnits: IFlat[] = [];
  if (priceRange.priceRange1) {
    let temp = flats.filter(
      (flat) => flat.price <= 3199999 && flat.price >= 3000000
    );
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (priceRange.priceRange2) {
    let temp = flats.filter(
      (flat) => flat.price <= 3399999 && flat.price >= 3200000
    );
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (priceRange.priceRange3) {
    let temp = flats.filter(
      (flat) => flat.price <= 3600000 && flat.price >= 3400000
    );
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (sizeRange.sizeRange1) {
    let temp = flats.filter((flat) => flat.size <= 920 && flat.size >= 900);
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (sizeRange.sizeRange2) {
    let temp = flats.filter((flat) => flat.size <= 950 && flat.size >= 921);
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (sizeRange.sizeRange3) {
    let temp = flats.filter((flat) => flat.size <= 980 && flat.size >= 951);
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  if (sizeRange.sizeRange4) {
    let temp = flats.filter((flat) => flat.size <= 1000 && flat.size >= 981);
    temp.forEach((flat) => {
      let exist = sortedUnits.find((su) => su.id === flat.id);
      if (!exist) sortedUnits.push(flat);
    });
  }
  return sortedUnits;
};

export default sortFlats;
