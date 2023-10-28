// import { navLinks } from "../constants";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons/index";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <header className="px-4">
      <nav className="flex md:justify-around h-12 item-center max-container z-10 w-full justify-between">
        <a className="" href="">
          <img
            src={headerLogo}
            width={100}
            height={25}
            className="mt-3 "
            alt="img"
          />
        </a>

        <ul className="max-sm:hidden flex self-center">
          {navLinks.map((item) => (
            <li className="m-1" key={item.label}>
              <a
                className="font-montserrat leading-normal self-center text-[12px] text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="login max-sm:hidden flex font-montserrat self-center text-[12px] text-slate-700">
          <a href="">Singin </a>
          <span> / </span>
          <a href=""> Explor Now</a>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="hidden max-sm:block self-center"
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
