import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePicture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // delay unmount for fade-out
  useEffect(() => {
    let timer;
    if (isOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 500);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  // define your routes
  const routes = {
    "Data Alumni": "/data-alumni",
    Kegiatanku: "/kegiatanku",
    Pengaturan: "/settings",
    Keluar: "/login",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile picture + red dot */}
      <div className="relative cursor-pointer">
        <img
          src="/images/icon/profile-picture.png"
          alt="Profile"
          className="w-13 h-13 rounded-full border-2 border-gray-300"
        />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </div>

      {/* Dropdown menu */}
      {isVisible && (
        <div
          className={`
            absolute right-0 mt-2 w-70 bg-white rounded-2xl shadow-lg z-10
            transition-opacity duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-gray-800">
                  Fiqhin Alhan Munfiqo
                </p>
                <p className="text-sm text-gray-500">fiqhin.alhan@gmail.com</p>
              </div>
              <div className="relative">
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Bell />
                </button>
                <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </div>
            <hr className="border-gray-200 mb-4" />
            <ul className="space-y-2">
              {Object.keys(routes).map((label) => (
                <li key={label}>
                  <button
                    className="w-full text-left text-gray-700 hover:text-blue-600 px-2 py-1 cursor-pointer"
                    onClick={() => navigate(routes[label])}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
