import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = ({ item }) => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-4 ">
      {services.map((s) => (
        <ServiceCard key={s.label} {...s} />
      ))}
    </div>
  );
};

export default Services;
