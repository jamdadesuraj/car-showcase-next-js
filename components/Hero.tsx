"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find your next car from our catalogue</h1>
        <p className="hero__subtitle">
          streamline your car search with our extensive inventory of cars.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10 hover:bg-black-100 "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
