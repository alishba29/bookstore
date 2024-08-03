import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About Us",
      link: "/about-us"
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
      link: "/profile"
    },
  ];
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
        <div className="hidden md:flex gap-4">
          {links.map((item, i) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </div>

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
        <button className="text-white text-2xl hover:text-zinc-400"><FaGripLines />
        </button>

      </div>
    </nav>
   <div className="bg-zinc-800 h-screen absolute top-0 left-0 z-40 flex flex-col items-center justify-between">
   {links.map((item, i) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </Link>
          ))}
   </div>
    </>
  );
};

export default Navbar;
