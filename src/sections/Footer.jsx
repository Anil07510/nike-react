// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section id="footer" className="footer flex justify-center items-center">
      <p className="flex flex-col justify-center text-xl tracking-widest">
        It is designed & deploy by{" "}
        <a
          href="https://linktr.ee/aniraj07510"
          className="text-[red] flex justify-center font-bold "
        >
          {" "}
          @anil
        </a>
      </p>
    </section>
  );
};

export default Footer;
