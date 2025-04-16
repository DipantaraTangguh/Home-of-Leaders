import { useState, useEffect } from "react";
import { HolBcfLogo } from "../components/Elements/HolBcfLogo";
import { RightIlustration } from "../components/Elements/RightIlustration";

function EmailVerificationPage() {
  // State Variables
  const [timeLeft, setTimeLeft] = useState(599); // 9:59 = 9*60 + 59 = 599 detik

  // Functions
  // Funtions to handle timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Main Page
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Email Verification Timer Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        {/* Logos */}
        <HolBcfLogo />

        {/* Title Card */}
        <div className="bg-white p-8 py-20 rounded-lg shadow-md w-full max-w-xl">
          {/* Timer  */}
          <h1 className="text-4xl font-semibold text-black-800 mb-4">
            {formatTime(timeLeft)}
          </h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-black-800 mb-4">
            Verifikasi Email
          </h2>

          {/* Explanation */}
          <p className="text-gray-600">
            Yuk cek email Anda sekarang dan klik tautan untuk melakukan reset
            password sebelum waktunya habis.
          </p>
        </div>
      </div>

      {/* Riht Side  Illustration*/}
      <RightIlustration imageSrc="/images/Illustrations/verifikasi-email-alumni.png" />
    </div>
  );
}

export default EmailVerificationPage;
