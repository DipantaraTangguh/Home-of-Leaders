import Navbar from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";
import Container from "../../components/Layouts/Container";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileSettingsPage() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const isFormValid =
    currentPwd && newPwd && confirmPwd && newPwd === confirmPwd;

  const handleSave = () => {
    if (!isFormValid) return;
    // TODO: integrate save logic
    console.log("Saving new password...");
  };

  return (
    <main>
      <Navbar />
      <Container>
        <h2 className="text-3xl font-bold mb-12 mt-5 text-[#0D4690] mx-auto container ">
          Pengaturan
        </h2>
        <div className="p-10 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
          <h2 className="text-2xl font-semibold mb-8">Ubah Kata Sandi</h2>
          <div className="space-y-7">
            <PasswordField
              label="Kata Sandi Saat Ini"
              placeholder="Masukkan Kata Sandi Anda Saat Ini"
              value={currentPwd}
              onChange={(e) => setCurrentPwd(e.target.value)}
              show={showCurrent}
              onToggle={() => setShowCurrent((prev) => !prev)}
            />
            <PasswordField
              label="Kata Sandi Baru"
              placeholder="Masukkan Kata Sandi Anda yang Baru"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              show={showNew}
              onToggle={() => setShowNew((prev) => !prev)}
            />
            <PasswordField
              label="Konfirmasi Kata Sandi Baru"
              placeholder="Konfirmasi Kata Sandi Anda yang Baru"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              show={showConfirm}
              onToggle={() => setShowConfirm((prev) => !prev)}
            />
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={handleSave}
              disabled={!isFormValid}
              className={`px-8 py-3 rounded-3xl text-md font-semibold transition \
            ${
              isFormValid
                ? "bg-[#0d4690] text-white hover:bg-blue-800 cursor-pointer"
                : "bg-[#ADB5BD] text-white cursor-not-allowed"
            }`}
            >
              Simpan
            </button>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  show,
  onToggle,
}) {
  return (
    <div>
      <label className="block text-md font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border border-black rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-700"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute inset-y-0 right-3 flex items-center"
        >
          {show ? (
            <EyeOff className="h-6 w-6 cursor-pointer text-[#0d4690]" />
          ) : (
            <Eye className="h-6 w-6 cursor-pointer text-[#0d4690]" />
          )}
        </button>
      </div>
    </div>
  );
}
