import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { styles } from "../styles";
import logo from '../Images/csoc-logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let Links = [
    { name: "Home", link: "/", id: "home" },
    { name: "About us", link: "/", id: "aboutus" },
    { name: "Members", link: "/members", id: "members" },
    { name: "Events", link: "/events", id: "events" },
    { name: "Contacts", link: "/contacts", id: "contacts" },
  ];
  let [open, setOpen] = useState(false);
  
  return (
    <div
      className={`w-full z-20 shadow-md md:shadow-none fixed top-0 left-0 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="md:flex items-center md:justify-between py-4 md:px-24 px-7 text-white">
        <a href="/">
          <div
            className="font-bold font-[Play] text-4xl cursor-pointer flex items-center text-gray-800"
          >
            <img className="h-16" src={logo} alt="logo" />
          </div>
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaAlignJustify name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center  text-center md:pb-0 pb-12 absolute md:static bg-primary md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <a
                  href={link.link}
                  className="hover:text-gray-400 text-white duration-500"
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          {open ? (
            <Link
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              {/* <button
                className={`block rounded-full px-4 py-2 border-4 border-black md:hidden mx-auto`}
              >
                Contact us
              </button> */}
            </Link>
          ) : (
            <></>
          )}
        </ul>
        {/* <Link
          activeClass="active"
          to="contactus"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
