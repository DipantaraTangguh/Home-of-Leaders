const MenuItem = ({ item, path, activePath, onClick, extraClasses = "" }) => {
  const isActive = activePath === path;

  return (
    <button
      onClick={onClick}
      className={`
        relative text-gray-700 font-medium hover:text-blue-600
        ${isActive ? "text-[#0D4690] font-semibold " : ""}
        ${extraClasses}`}
    >
      {item}
      {isActive && (
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-10 h-[4px] bg-[#0D4690] rounded-full"></span>
      )}
    </button>
  );
};

export default MenuItem;
