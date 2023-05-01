type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

// used Car type
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// intersection
type IntersectionType = CarType & {
  date: "10/10/22";
};
