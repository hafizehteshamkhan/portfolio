import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface button {
  text: string;
  onClick?: () => void;
}

interface link {
  id: number,
  name: string,
  link: string
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 1, name: "About", link: "about" },
    { id: 1, name: "Skills", link: "skills" },
    { id: 1, name: "My Projects", link: "my projects" },
  ];


  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-20 text-white"
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <div className="flex items-center justify-between p-5">
          {/* {logo} */}
          <a
            data-aos="fade-up"
            data-aos-delay="100"
            href="#home" className="text-4xl font-bold italic text-white">
            Portfolio
          </a>

          {/* mobile menu toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu className="w-8 h-8 text-white" />
          </button>

          {/* Desktop navigation */}
          <nav
            data-aos="fade-up"
            data-aos-delay="300"
            className="hidden md:flex items-center space-x-7">
            {NavbarLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.link}
                  className="hover:text-purple-500 hover:text-2xl text-white text-lg"
                >
                  {link.name}
                </a>
              );
            })}
          <button
           data-aos="fade-left"
           data-aos-delay="600"
           className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
            Contact
          </button>
              </nav>
        </div>

        {/* mobile navigation */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
        >
          {/* close button */}
          <button
            className="absolute top-5 right-5 text-[#000]"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>
          {/* mobile navigation */}
          {NavbarLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.link}
                className="text-lg text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )
          })}
          {/* contact-button */}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
            Contact Us
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
