import { useState, useEffect } from "react";
import logo from '../assets/degic.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = ['About', 'Services', 'Products', 'Contact'];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-b-gray-300/40">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 relative bg-transparent">

        <div className="w-32 md:w-36 lg:w-40">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <nav className="hidden md:flex items-center gap-x-6 font-inter">
          {Links.map((link, i) => (
            <a key={i} href="#" className="text-lg hover:text-[#2AB691] transition">
              {link}
            </a>
          ))}
          <button className="text-[#2AB691] bg-[#2AB691]/10 px-4 py-2 rounded-lg cursor-pointer">
            Sign Up
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
        >
          <span
            className={`absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-y-6 items-center justify-center h-full">
          {Links.map((link, i) => (
            <a key={i} href="#" className="text-white text-lg hover:text-cyan-400 transition">
              {link}
            </a>
          ))}

          <button className="text-white bg-[#2AB691]/90 px-6 py-2 rounded cursor-pointer hover:bg-[#2AB691]/80 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
