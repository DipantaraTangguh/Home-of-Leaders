import React, { useState } from "react";
import Logo from "../Elements/Logo";
import Menu from "../Fragments/Menu";
import ProfilePicture from "../Elements/ProfilePicture";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Logo />

        {/* Tombol Hamburger (hanya muncul di layar kecil) */}
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* Menu Desktop (hanya muncul di layar medium ke atas) */}
        <div className="hidden md:flex">
          <Menu navigate={navigate} />
        </div>

        {/* Profile Picture */}
        <div className="hidden md:flex">
          <ProfilePicture />
        </div>
      </div>

      {/* Menu Mobile (muncul saat isOpen = true) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 transition-all duration-300">
          <Menu navigate={navigate} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
