import { carProps, filterProps } from "@/types";

export const fetchCars = async (filters: filterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;
  const headers = {
    "X-RapidAPI-Key": "1b3657b9bfmshd0d6eaa08c67d79p1f3f9ajsn8b477cb48bb3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append("make", make);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modalYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("modelFamily", model.split(" ")[0]);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
