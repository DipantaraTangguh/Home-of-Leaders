import React from "react";

const ProfilePicture = () => {
  return (
    <div className="relative">
      <img
        src="/images/icon/profile-picture.png"
        alt="Profile"
        className="w-13 h-13 rounded-full border-2 border-gray-300"
      />
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
    </div>
  );
};

export default ProfilePicture;
