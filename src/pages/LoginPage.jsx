import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Left Side (Login Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        {/* Logos */}
        <div className="flex space-x-4 mb-8">
          <img
            src="/images/bcf-logo.png"
            alt="Logo 1"
            className="h-12 md:h-20"
          />
          <img
            src="/images/hol-logo.png"
            alt="Logo 2"
            className="h-12 md:h-20"
          />
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 py-20 rounded-lg shadow-md w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Masuk</h2>
          <p className="text-gray-600 text-sm mb-6">
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
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <span className="text-gray-500">🔑</span>
              <input
                type="password"
                placeholder="Masukkan password Anda"
                className="text-sm md:text-base bg-transparent outline-none ml-2 flex-1"
              />
              <span className="text-gray-500 cursor-pointer">👁</span>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center space-x-2 accent-orange-500">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-orange-500">Ingat Saya</span>
            </label>
            <a href="#" className="text-orange-500">
              Lupa Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800"
          >
            Masuk
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Baca{" "}
          <a href="#" className="text-blue-500">
            Syarat Ketentuan
          </a>{" "}
          dan{" "}
          <a href="#" className="text-blue-500">
            Kebijakan Privasi
          </a>{" "}
          kami.
        </p>
        <p className="text-xs text-gray-500">©2024 Bakrie Center Foundation</p>
      </div>

      {/* Right Side (Illustration) */}
      <div className="hidden md:flex md:w-1/2 text-white justify-center items-center p-8 rounded-l-lg">
        <div className="text-center">
          <img
            src="/images/asset-selamat-datang-alumni.png"
            alt="Illustration"
            className="w-140 mx-auto mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
