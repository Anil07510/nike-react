const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[10px] shadow-3xl px-10 py-16 my-4  ">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" />
      </div>
      <h3 className="font-bold my-2 info-text">{label}</h3>
      <p className=" text-slate-500 my-2 info-text">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
