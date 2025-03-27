const MenuItem = ({ item, active, setActive, extraClasses = "" }) => {
  const isActive = active === item;

  return (
    <button
      onClick={() => setActive(item)}
      className={`
        relative text-gray-700 font-medium hover:text-blue-600
        ${isActive ? "text-blue-700 font-semibold" : ""}
        ${extraClasses}
      `}
    >
      {item}
      {isActive && (
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-6 h-[2px] bg-blue-700 rounded-full"></span>
      )}
    </button>
  );
};

export default MenuItem;
