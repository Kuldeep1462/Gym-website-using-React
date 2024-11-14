import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/tt.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "CONTACT",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            <a href="tel:+917986721870" className="contact-number" style={{color: 'white'}}>
              +91 7986721870
            </a>
          </div>
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:text-primary duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {isAuthenticated && (
                <li className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold">
                  <p>{user.name}</p>
                </li>
              )}
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => loginWithRedirect()}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Log In
                  </button>
                </li>
              )}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
