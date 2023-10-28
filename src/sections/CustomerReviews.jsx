import { reviews } from "../constants/index";
import CustomerReview from "../components/CustomerReview";
const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h2 className="font-bold text-3xl text-center">
        What Our <span className="text-coral-red">Customer</span> Say
      </h2>
      <p className="info-text text-center">
        Here are some customer reviews given to our company 
      </p>

      <div className="customerReview flex mt-10 justify-center items-center md:flex-row flex-col xy-4">
        {reviews.map((item) => (
          <CustomerReview key={item.label} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
