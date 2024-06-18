"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        className=" object-contain"
        alt="magnifying glass"
      />
    </button>
  );
};

const SearchBar = ({ setManufacturer, setModel }: searchBarProps) => {
  const [SearchManufacture, setSearchManufacture] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (SearchManufacture === "" || searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(SearchManufacture);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={SearchManufacture}
          setSelected={setSearchManufacture}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />

        <input
          type="text"
          name="model"
          value={searchModel}
          placeholder="Tiguan"
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
