"use client";

import { customButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
