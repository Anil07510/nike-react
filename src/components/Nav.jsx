// import { navLinks } from "../constants";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons/index";
import { close } from "../assets/icons/index";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <header className="mx-4 mt-4 relative">
      <nav className="flex md:justify-between h-12 item-center max-container z-10 w-full justify-between">
        <a className="">
          <img
            src={headerLogo}
            width={100}
            height={25}
            className="mt-3"
            alt="img"
          />
        </a>
        <div className="links flex px-6">
          <ul className="max-sm:hidden flex self-center">
            {navLinks.map((item) => (
              <li className="m-1" key={item.label}>
                <a
                  className="font-montserrat leading-normal self-center text-[18px] text-slate-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="login max-sm:hidden flex font-montserrat self-center text-[18px] text-slate-700 mx-5">
            <a href="">Singin </a>
            <span> / </span>
            <a href=""> Explor Now</a>
          </div>
        </div>
        <div
          onClick={toggleHandler}
          className="hidden max-sm:block self-center"
        >
          {toggle ? (
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          ) : (
            <img src={close} alt="hamburger icon" width={25} height={25} />
          )}
        </div>
      </nav>
      <div
        className={
          toggle
            ? "links  absolute hidden bg-white w-full h-screen z-20 mx-0"
            : "links absolute flex flex-col bg-white w-full h-screen z-20 mx-0"
        }
      >
        <ul className=" flex flex-col justify-center items-center ">
          {navLinks.map((item) => (
            <li
              className="my-4"
              key={item.label}
              onClick={() => setToggle(!toggle)}
            >
              <a
                className="font-montserrat leading-normal self-center text-[18px] text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="login flex font-montserrat self-center text-[18px] text-slate-700 mx-5">
          <a href="">Singin</a>
          <span> / </span>
          <a href="">Explor Now</a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
