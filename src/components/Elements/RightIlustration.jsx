export const RightIlustration = ({ imageSrc }) => {
  return (
    <div className="hidden md:flex md:w-1/2 text-white justify-center items-center p-8 rounded-l-lg">
      <div className="text-center">
        <img src={imageSrc} alt="Illustration" className="w-140 mx-auto mb-4" />
      </div>
    </div>
  );
};
