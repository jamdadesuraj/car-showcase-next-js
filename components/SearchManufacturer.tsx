"use client";

import { manufacturers } from "@/constants";
import { searchManufactureProps } from "@/types";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchManufacturer = ({
  selected,
  setSelected,
}: searchManufactureProps) => {
  const [query, setQuery] = useState<string>("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <ComboboxInput
            className="search-manufacturer__input"
            displayValue={(manufacturer: string) => manufacturer}
            placeholder="Volkswagen"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              anchor="bottom"
              className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
            >
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option bg-white hover:bg-primary-blue ${
                      active ? "bg-primary-blue text-white " : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <div
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </div>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
