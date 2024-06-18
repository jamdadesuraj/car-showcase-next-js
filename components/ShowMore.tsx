"use client";

import { showMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: showMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyle="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
