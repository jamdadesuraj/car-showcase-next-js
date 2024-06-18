import { manufacturers } from "./../constants/index";
import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface searchManufactureProps {
  selected: string;
  setSelected: (manufacture: string) => void;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface filterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: number;
  model: string;
}

export interface optionsProps {
  title: string;
  value: string;
}

export interface customFilterProps {
  title: string;
  options: optionsProps[];
  setFilter: (filter: string) => void;
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;

  setLimit: (limit: number) => void;
}

export interface searchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}
