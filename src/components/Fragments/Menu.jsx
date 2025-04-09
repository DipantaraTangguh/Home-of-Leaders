import { useState } from "react";
import MenuItem from "../Elements/MenuItem";

const Menu = () => {
  const [active, setActive] = useState("Beranda");

  const menuItems = [
    "Beranda",
    "Alumni Center",
    "Advocacy Center",
    "Research Center",
    "Surat Rekomendasi",
  ];

  return (
    <div className="space-y-4 md:space-y-0 md:space-x-8">
      {/* Item yang selalu muncul di semua layar */}
      {menuItems.map((item) => (
        <MenuItem
          key={item}
          item={item}
          active={active}
          setActive={setActive}
          extraClasses="block md:inline-block"
        />
      ))}

      {/* Item "Profile" hanya untuk layar kecil */}
      <MenuItem
        item="Profile"
        active={active}
        setActive={setActive}
        // Hanya muncul di mobile
        extraClasses="block md:hidden"
      />
    </div>
  );
};

export default Menu;
