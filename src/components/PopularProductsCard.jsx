import Button from "./Button";
import { arrowRight } from "../assets/icons";


const PopularProductsCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="popularproductsCart ">
      <img className="" src={imgURL} alt="" height={120} width={180} />
      <div className="rating font-bold text-sm py-1">⭐ {rating}</div>
      <div className="brandName font-bold text-ss py-1">{name}</div>
      <div className="price font-bold text-sm text-coral-red py-1">{price}</div>
      <Button label={"Shop Now"} iconURL={arrowRight} padding= {1} textsize ={"sm"}/>
    </div >
  );
};

export default PopularProductsCard;
