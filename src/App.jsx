import {
  Hero,
  PopulerProducts,
  SupperQuality,
  Services,
  SpecialOffer,
  CustomerRevies,
  Subscribe,
  Footer,
} from "./sections/index";
import Nav from './components/Nav'
export default function App() {
  return (
    <main>
      <Nav />
      <section className="padding">
        <Hero />
      </section>
      <section className="padding" id="popularProducts">
        <PopulerProducts />
      </section>
      <section className="padding">
        <SupperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerRevies />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
}
