import React from "react";
import { useState } from "react";

const LoginPage = () => {
  // State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Left Side (Login Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        {/* Logos */}
        <div className="flex justify-center items-center h-auto w-full transition-all duration-700 ease-in-out mb-5">
          {/* HOL Logo Before ANomation */}
          <img
            src="/images/hol-logo.png"
            alt="Home of Leaders Logo"
            className={`h-25 transition-all duration-700 ease-in-out ${
              email.length ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          />

          {/* Animation after email was filled */}
          <div
            className={`absolute flex items-center space-x-4 transition-all duration-700 ease-in-out ${
              email.length > 0
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-3"
            }`}
          >
            <img 
            src="/images/bcf-logo.png" 
            alt="BCF Logo" 
            className="h-17" 
            />
            <img
              src="/images/hol-logo.png"
              alt="Home of Leaders Logo"
              className="h-17"
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 py-20 rounded-lg shadow-md w-full max-w-xl">
          {/* Title Card */}
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Masuk</h2>
          <p className="text-gray-600 mb-6">
            Masukkan email dan password telah terdaftar di <strong>LEAD</strong>
            , <strong>BGF</strong> atau <strong>CLP</strong> yaa!
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <span className="text-gray-500">✉</span>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="text-sm md:text-base bg-transparent outline-none ml-2 flex-1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative flex items-center border rounded-md px-3 py-2 bg-gray-100">
              {/* key Icon */}
              <span className="text-gray-500 absolute left-3">🔑</span>

              {/* Input Password */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password Anda"
                className="w-full text-sm md:text-base bg-transparent outline-none pl-8 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Toggle Password Button Leaked */}
              <button
                className="absolute right-3 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center space-x-2 text-orange-500">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-orange-500 text-sm">Ingat Saya</span>
            </label>
            <a href="#" className="text-orange-500 text-sm">
              Lupa Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className={`w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 ${
              email.length > 0 && password.length > 0
                ? "bg-[#0D4690] text-white cursor-pointer"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={!email.length > 0 && !password.length > 0}
          >
            Masuk
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Baca{" "}
          <a href="#" className="text-orange-500">
            Syarat Ketentuan
          </a>{" "}
          dan{" "}
          <a href="#" className="text-orange-500">
            Kebijakan Privasi
          </a>{" "}
          kami.
        </p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bakrie Center Foundation.
        </p>
      </div>

      {/* Right Side (Illustration) */}
      <div className="hidden md:flex md:w-1/2 text-white justify-center items-center p-8 rounded-l-lg">
        <div className="text-center">
          <img
            src="./public/images/Illustrations/selamat-datang-alumni.png"
            alt="Illustration"
            className="w-140 mx-auto mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
