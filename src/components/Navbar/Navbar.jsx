import { useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white w-full ">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Left Navigation - Hidden on small screens */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="#">Home</Link>
          <Link to="#">Shop</Link>
          <Link to="#">Blogs</Link>
          <Link to="#">Contact</Link>
        </div>

        {/* Center Logo */}
        <div>
          <img
            src="/logo.png" 
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-6 text-gray-700">
          <Link to="/login" className="flex items-center gap-1">
            <span className="text-sm">Login</span>
            <LuUserRound className="text-xl" />
          </Link>
          <IoSearchOutline className="cursor-pointer text-xl" />
          <IoCartOutline className="cursor-pointer relative text-xl" />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 text-gray-700 lg:hidden z-50">
            <Link to="#" onClick={toggleMenu}>Home</Link>
            <Link to="#" onClick={toggleMenu}>Shop</Link>
            <Link to="#" onClick={toggleMenu}>Blogs</Link>
            <Link to="#" onClick={toggleMenu}>Contact</Link>
            <Link to="#" className="flex items-center gap-2" onClick={toggleMenu}>
              <LuUserRound /> Login
            </Link>
            <div className="flex items-center gap-4">
              <IoSearchOutline className="text-xl" />
              <IoCartOutline className="text-xl" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
