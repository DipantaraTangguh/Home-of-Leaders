import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../Elements/MenuItem";

const Menu = ({ navigate, closeMenu }) => {
  const location = useLocation();
  const currentPath = location.pathname || "/landing-page";

  // Determine active states
  const isAlumniActive =
    currentPath.startsWith("/alumni-center") ||
    currentPath.startsWith("/callforfellows") ||
    currentPath.startsWith("/bondingactivities");
  const isAdvActive =
    currentPath === "/advocacy-center" ||
    currentPath.startsWith("/advocacy-center/");
  const isResActive =
    currentPath === "/research-center" ||
    currentPath.startsWith("/research-center/");

  // State & refs for hover delays
  const [advHover, setAdvHover] = useState(false);
  const advTimer = useRef(null);
  const [resHover, setResHover] = useState(false);
  const resTimer = useRef(null);

  // Menu definitions
  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Alumni Center", path: "/alumni-center" },
    { label: "Advocacy Center", path: "/advocacy-center", hasDropdown: true },
    { label: "Research Center", path: "/research-center", hasDropdown: true },
    { label: "Surat Rekomendasi", path: "/surat-rekomendasi" },
  ];

  const advDropdown = [{ label: "IYSF", path: "/advocacy-center/iysf" }];
  const resDropdown = [
    { label: "Publikasi", path: "/research-center/publication" },
    { label: "Prosiding", path: "/research-center/prosiding" },
    { label: "My Research", path: "/research-center/my-research" },
  ];

  // Navigation handler
  const handleClick = (path) => {
    navigate(path);
    if (closeMenu) closeMenu();
  };

  // Hover helpers
  const advEnter = () => {
    clearTimeout(advTimer.current);
    setAdvHover(true);
  };
  const advLeave = () => {
    advTimer.current = setTimeout(() => setAdvHover(false), 200);
  };
  const advDropdownEnter = () => clearTimeout(advTimer.current);
  const advDropdownLeave = () => setAdvHover(false);

  const resEnter = () => {
    clearTimeout(resTimer.current);
    setResHover(true);
  };
  const resLeave = () => {
    resTimer.current = setTimeout(() => setResHover(false), 200);
  };
  const resDropdownEnter = () => clearTimeout(resTimer.current);
  const resDropdownLeave = () => setResHover(false);

  return (
    <div className="space-y-4 md:space-y-0 md:space-x-8 flex items-center">
      {menuItems.map((menu) => {
        // Alumni Center
        if (menu.label === "Alumni Center") {
          return (
            <MenuItem
              key={menu.label}
              item={menu.label}
              path="/alumni-center"
              activePath={isAlumniActive ? "/alumni-center" : currentPath}
              onClick={() => handleClick(menu.path)}
              extraClasses="block md:inline-block cursor-pointer px-4 py-2"
            />
          );
        }

        // Advocacy Center with dropdown
        if (menu.hasDropdown && menu.label === "Advocacy Center") {
          return (
            <div
              key={menu.label}
              className="relative inline-block"
              onMouseEnter={advEnter}
              onMouseLeave={advLeave}
            >
              <MenuItem
                item={menu.label}
                path={menu.path}
                activePath={isAdvActive ? "/advocacy-center" : currentPath}
                onClick={() => {}}
                extraClasses="block md:inline-block cursor-default px-4 py-2"
              />

              {advHover && (
                <div
                  onMouseEnter={advDropdownEnter}
                  onMouseLeave={advDropdownLeave}
                  className="absolute top-full left-0 mt-1 w-70 p-5 bg-white border border-gray-100 shadow-sm rounded-tr-3xl rounded-br-3xl rounded-bl-3xl transition duration-150 z-20"
                >
                  {advDropdown.map((dd) => (
                    <button
                      key={dd.label}
                      onClick={() => handleClick(dd.path)}
                      className="w-full text-left px-4 py-4 hover:bg-gray-100 hover:text-[#0d4690] cursor-pointer rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:font-medium"
                    >
                      {dd.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }

        // Research Center with dropdown
        if (menu.hasDropdown && menu.label === "Research Center") {
          return (
            <div
              key={menu.label}
              className="relative inline-block"
              onMouseEnter={resEnter}
              onMouseLeave={resLeave}
            >
              <MenuItem
                item={menu.label}
                path={menu.path}
                activePath={isResActive ? "/research-center" : currentPath}
                onClick={() => {}}
                extraClasses="block md:inline-block cursor-default px-4 py-2"
              />

              {resHover && (
                <div
                  onMouseEnter={resDropdownEnter}
                  onMouseLeave={resDropdownLeave}
                  className="absolute top-full left-0 mt-1 w-70 p-5 bg-white border border-gray-100 shadow-sm rounded-tr-3xl rounded-br-3xl rounded-bl-3xl transition duration-150 z-20"
                >
                  {resDropdown.map((dd) => (
                    <button
                      key={dd.label}
                      onClick={() => handleClick(dd.path)}
                      className="w-full text-left px-4 py-4 hover:bg-gray-100 hover:text-[#0d4690] cursor-pointer rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:font-medium"
                    >
                      {dd.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }

        // Default clickable items
        return (
          <MenuItem
            key={menu.label}
            item={menu.label}
            path={menu.path}
            activePath={currentPath}
            onClick={() => handleClick(menu.path)}
            extraClasses="block md:inline-block cursor-pointer px-4 py-2"
          />
        );
      })}

      {/* Profile for mobile */}
      <MenuItem
        item="Profile"
        path="/profile"
        activePath={currentPath}
        onClick={() => handleClick("/profile")}
        extraClasses="block md:hidden cursor-pointer px-4 py-2"
      />
    </div>
  );
};

export default Menu;
