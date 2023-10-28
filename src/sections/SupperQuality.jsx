import Button from "../components/Button";
import { shoe8 } from "../assets/images/index";

const SupperQuality = () => {
  return (
    <div className="flex md:flex-row justify-between items-center max-lg:flex-col gap-12 w-full max-container">
      <div className="">
        <h2 className="font-bold text-3xl">
          We provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="info-text my-4">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text text-black">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="view details" padding={2} />
        </div>
      </div>
      <div className="w-[100%] h-[100%] flex justify-center items-center ">
        <img
          width={570}
          height={522}
          className="object-contain"
          src={shoe8}
          alt="image"
        />
      </div>
    </div>
  );
};

export default SupperQuality;
