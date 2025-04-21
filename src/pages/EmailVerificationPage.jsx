import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { HolBcfLogo } from "../components/Elements/HolBcfLogo";
import { RightIlustration } from "../components/Elements/RightIlustration";

function EmailVerificationPage() {
  // State Variables
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Email Verification Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        {/* Logos */}
        <div className="flex justify-center items-center h-auto w-full mb-10">
          {/* Logo BCF */}
          <img
            src="/images/logo/bcf-logo.png"
            alt="BCF Logo"
            className="h-17"
          />

          {/* space between logo */}
          <div className="w-"></div>

          {/* Logo Home of Leaders */}
          <img
            src="/images/logo/hol-logo.png"
            alt="Home of Leaders Logo"
            className="h-17"
          />
        </div>

        {/* Title Card */}
        <div className="bg-white p-8 py-20 rounded-lg shadow-md w-full max-w-xl">
          {/* Title Card */}
          <h2 className="text-2xl font-semibold text-black-800 mb-4">
            Verifikasi Email
          </h2>
          <p className="text-grawy-600 mb-6">
            Masukkan email dan password sudah didaftarkan sebelumnya oleh tim{" "}
            <strong>BCF</strong> yaa!
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <span className="text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="text-sm md:text-base bg-transparent outline-none ml-2 flex-1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className={`w-full bg-blue-900 text-white py-2 rounded-lg font-semibold  ${
              email.length > 0
                ? "bg-[#0D4690] text-white cursor-pointer"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={!email.length > 0}
          >
            Masuk
          </button>
        </div>
      </div>

      {/* Riht Side  Illustration*/}
      <RightIlustration imageSrc="/images/Illustrations/verifikasi-email-alumni.png" />
    </div>
  );
}

export default EmailVerificationPage;
