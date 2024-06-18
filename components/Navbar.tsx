import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex flex-center items-center">
          <img src="/logo.svg" alt="logo" className="w-[124px] h-[32px]" />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-blue bg-white rounded-full"
        />
      </nav>
    </header>
  );
};

export default Navbar;
