export default interface IFlat {
  id: string;
  size: number;
  price: number;
  level: number;
  buildingNumber: number;
  noOfBedrooms: number;
  noOfBaths: number;
  noOfBalconies: number;
  bookingPrice: number;
  isBooked: boolean;
  downPaymentDays: number;
  netArea: number;
  commonArea: number;
  images: IImage[];
}

export interface IImage{
  imageLocation: string;
}

export interface IGalleryImage{
  imageLocation: string;
}
