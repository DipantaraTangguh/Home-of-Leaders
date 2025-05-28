import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="flex items-center space-x-2 ">
        <Link to="/landing-page">
          <img
            src="/images/logo/hol-logo.png"
            alt="Logo"
            className="w-32 sm:w-48 md:w-64 lg:w-80"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
