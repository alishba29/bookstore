import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "All Books",
      link: "/all-books"
    },
    {
      title: "Cart",
      link: "/cart"
    },
    {
      title: "Profile",
      link: "/profile",
      className: "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300" // Adjusted padding for better alignment
    },
    {
      title: "Admin Profile",
      link: "/profile",
      className: "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300" // Adjusted padding for better alignment
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn ?? false);
  const role = useSelector((state) => state.auth?.role ?? false);

  if (isLoggedIn === false) {
    links.splice(2, 3); // Removes "Cart" and "Profile" if not logged in
  }
  if(isLoggedIn === true && role === "user") {
    links.splice(4, 1); // Removes "Profile" if logged in as user'){
  }
  if(isLoggedIn === true && role === "admin") {
    links.splice(3, 1); // Removes "Profile" if logged in as admin'){
  }

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">Bookista</h1>
        </div>
        <div className="nav-links-bookista block md:flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4"> {/* Ensure vertical alignment */}
            {links.map((item, i) => (
              <Link
                to={item.link}
                className={`hover:text-blue-500 transition-all duration-300 ${item.className ? item.className : ""}`}
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {isLoggedIn === false && 
            <div className="hidden md:flex gap-4">
              <Link
                to="/Login"
                className="px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                LogIn
              </Link>
              <Link
                to="/Signup"
                className="px-4 py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          }
          <button className="text-white text-2xl hover:text-zinc-400 md:hidden" onClick={() => setMobileNav(!mobileNav)}>
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className={`md:hidden fixed inset-0 bg-zinc-800 z-40 flex flex-col items-center justify-center transition-transform duration-300 ${mobileNav ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map((item, i) => (
          <Link
            to={item.link}
            className="text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
            key={i}
            onClick={() => setMobileNav(false)} // Close the menu when a link is clicked
          >
            {item.title}
          </Link>
        ))}
        {isLoggedIn === false && <>
          <Link
            to="/Login"
            className="px-8 mb-8 py-2 text-3xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300"
            onClick={() => setMobileNav(false)} // Close the menu when a link is clicked
          >
            LogIn
          </Link>
          <Link
            to="/Signup"
            className="px-8 mb-8 py-2 text-3xl font-semibold bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            onClick={() => setMobileNav(false)} // Close the menu when a link is clicked
          >
            Sign Up
          </Link>
        </>}
      </div>
    </>
  );
};

export default Navbar;
