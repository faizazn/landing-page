import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import logo from "../assets/logo.webp";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        {/* Logo */}
        <div className="pl-2">
          <a href="#">
            <img src={logo} alt="logo" width={150} height={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a href={link.link} key={index} className="uppercase text-sm font-medium">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Fixed Issue) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
        {LINKS.map((link, index) => (
          <a href={link.link} key={index} className="uppercase text-lg font-medium block py-2 tracking-wide">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
