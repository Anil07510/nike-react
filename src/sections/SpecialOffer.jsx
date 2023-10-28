import Button from "../components/Button";
import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <div className="specialOffer flex justify-center max-md:flex-col-reverse items-center max-container">
      <div className="">
        <img src={offer} alt="" />
      </div>
      <div className="">
        <h2 className="font-bold text-2xl py-8">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="info-text mb-3">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text" mb-3>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="buttons flex gap-3">
          <Button label="shop now" padding={2} />
          <Button label="learn more" padding={2} />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
