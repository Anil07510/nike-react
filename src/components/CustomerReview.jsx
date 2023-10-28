const CustomerReview = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="customerReview  flex justify-center items-center flex-col shadow-xl m-4 px-4 py-8  ">
      <img
        className="rounded-full"
        height={80}
        width={80}
        src={imgURL}
        alt=""
      />
      <p>{feedback}</p>
      <div className="rating text-info">⭐ {rating}</div>
      <div className="name font-bold text-xl">{customerName}</div>
    </div>
  );
};

export default CustomerReview;
