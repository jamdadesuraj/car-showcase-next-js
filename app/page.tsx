"use client";

import {
  CarCards,
  CustomFilter,
  Hero,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // pagination states
  const [limit, setLimit] = useState(10);

  // filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || "",
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">car catalogue</h1>
          <p>Explore the cars you like</p>
        </div>
        <div className="home__filters ">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <>
            <section>
              <div className="home__cars-wrapper">
                {allCars.map((car) => (
                  <CarCards car={car} />
                ))}
              </div>
              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}
              <ShowMore
                pageNumber={(limit || 10) / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
            </section>
          </>
        ) : (
          <>
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              {/* <p>{allCars?.message}</p> */}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
