import { useState } from "react";
import { Lock, Eye, EyeClosed, CircleCheckBig } from "lucide-react";
import { RightIlustration } from "../../components/Elements/RightIlustration";
import { HolBcfLogo } from "../../components/Elements/HolBcfLogo";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isCapital = /[A-Z]/.test(password);
  const isNumber = /[0-9]/.test(password);
  const isLength = password.length >= 8 && password.length <= 15;
  const isMatch = password && password === confirmPassword;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Email Verification Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        {/* Logos */}
        <HolBcfLogo />

        {/* New password & Confirmation password field */}
        <div className="bg-white p-8 py-20 rounded-lg shadow-md w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-black-800 mb-4">
            Reset Password
          </h2>

          {/* New Password Field */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative flex items-center border rounded-md px-3 py-2 bg-gray-100">
              {/* key Icon */}
              <span className="text-gray-500 absolute left-3">
                <Lock size="20" />
              </span>

              {/* Input Password */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password baru Anda"
                className="w-full text-sm md:text-base bg-transparent outline-none pl-8 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Toggle Password Button Leaked */}
              <button
                className="absolute right-3 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeClosed size="20" /> : <Eye size="20" />}
              </button>
            </div>

            {/* Checking Password Strength */}
            <div className="text-sm md:text-base mt-2">
              <p className="flex items-center gap-2 text-sm">
                <CircleCheckBig size="20"
                  className={`${
                    isCapital ? " text-green-600" : "text-gray-400"
                  }`}
                />
                Password harus mengandung kapital
              </p>
              <p className="flex items-center gap-2 text-sm">
                <CircleCheckBig size="20"
                  className={`${isNumber ? "text-green-600" : "text-gray-400"}`}
                />
                Password harus mengandung angka
              </p>
              <p className="flex items-center gap-2 text-sm">
                <CircleCheckBig size="20"
                  className={`${isLength ? "text-green-600" : "text-gray-400"}`}
                />
                Password terdiri dari 8–15 huruf
              </p>
            </div>
          </div>

          {/* Confirmation Password */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Konfirmasi Password
            </label>
            <div className="relative flex items-center border rounded-md px-3 py-2 bg-gray-100">
              {/* key Icon */}
              <span className="text-gray-500 absolute left-3">
                <Lock size="20" />
              </span>

              {/* Input Password */}
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Ulangi password baru Anda"
                className="w-full text-sm md:text-base bg-transparent outline-none pl-8 pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Toggle Password Button Leaked */}
              <button
                className="absolute right-3 text-gray-500 focus:outline-none"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeClosed size="20" /> : <Eye size="20" />}
              </button>
            </div>

            {/* Checking Confirmed Password */}
            <div className="text-sm md:text-base mt-2">
              <p className="flex items-center gap-2 text-sm">
                <CircleCheckBig size="20"
                  className={`${isMatch ? "text-green-600" : "text-gray-400"}`}
                />

                <span>
                  {isMatch ? "Password Cocok" : "Password tidak cocok"}
                </span>
              </p>
            </div>
          </div>

          {/* Confirmed Password Button */}
          <button
            type="button"
            className={`w-full bg-blue-900 text-white py-2 rounded-lg font-semibold ${
              isMatch
                ? "bg-[#0D4690] text-white cursor-pointer"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={isMatch}
          >
            Masuk
          </button>
        </div>
      </div>

      {/* Right Side Illustration */}
      <RightIlustration imageSrc="/images/Illustrations/reset-password-alumni.png" />
    </div>
  );
}

export default ResetPasswordPage;
