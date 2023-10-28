import { products } from "../constants/index";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <div className="popularproduct py-1 max-container">
      <h2 className="text-3xl font-palanquin font-extrabold">
        Our <span className="text-[red]">Popular</span> Products
      </h2>
      <p className="lg:max-w-lg my-2 py-2 info-text">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="poplarProducts flex md:flex-row p-0 flex-wrap justify-around items-center">
        {products.map((p) => (
          <PopularProductsCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
