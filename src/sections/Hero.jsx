import { useState } from "react";

import { statistics, shoes } from "../constants";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images/index";
import "./index.css";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex md:flex-row p-0 flex-col justify-center min-h-full gap-10 max-container"
    >
      <div className="hero relative max-h-screen">
        <p className="text-xl font-montserrat text-coral-red mb-12">
          Our Winter Collections
        </p>
        <h2 className="text-4xl font-palanquin font-bold xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
          <br />
          <span className="font-palanquin font-bold text-coral-red font-b">
            Nike
          </span>
          Shoes
        </h2>
        <p className="text-gray-600 flex flex-wrap leading-6 mt-4 mb-4 sm:max-w-sm info-text">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <Button
          label="Shop now"
          iconURL={arrowRight}
          padding={3}
          textsize={"lg"}
        />
        <div className="statistics flex w-full md:gap-8 gap-10 flex-wrap">
          {statistics.map((item) => (
            <div>
              <p className="font-bold">{item.value}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 h-[70vh] bg-gray-400 bg-hero bg-cover bg-center justify-center items-center">
        <img src={bigShoeImg} alt="img" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[4%] sm:left-[20%] max-sm:px-6 ">
          {shoes.map((item) => (
            <div className="shoe-card bg-hero bg-cover bg-center ">
              <img
                className=" p-2"
                height={100}
                width={70}
                src={item.bigShoe}
                alt="img"
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
