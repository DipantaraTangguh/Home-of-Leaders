import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";

const RecommendationSection = () => {
  const [formData, setFormData] = useState({
    instansi: "",
    keperluan: "",
    tanggal: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit logic
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <section className="relative mb-16 container mx-auto p-6">
        {/* Header Banner */}
        <div className="bg-sky-50 rounded-[60px] pt-12 pb-20 px-6 text-center h-100">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Surat Rekomendasi
          </h2>
          <p className="mx-auto leading-relaxed px-5">
            Surat rekomendasi bisa jadi 'tiket' menuju kesuksesan. Surat ini
            bisa membantu kamu{" "}
            <span className="font-semibold text-orange-400">
              membuktikan kemampuan dan potensi diri
            </span>
            , terutama saat melamar pekerjaan atau beasiswa.{" "}
            <span className="font-semibold text-orange-400">
              Batas maksimal
            </span>{" "}
            pengajuan surat rekomendasi adalah{" "}
            <span className="font-semibold text-orange-400">seminggu</span>{" "}
            sebelum surat rekomendasi itu dibutuhkan.
          </p>
        </div>

        {/* Timeline Card */}
        <div className="relative px-4 sm:px-6 lg:px-8 md:-mt-40">
          <div className="bg-white rounded-[60px] p-8 shadow-xl overflow-hidden relative ">
            <div>
              <h2 className="font-bold text-blue-900 text-2xl mt-10 ml-10">
                Proses Pengajuan Surat Rekomendasi
              </h2>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/recommendation-letter/proses-pengajuan.png"
                alt="image"
                className="md:py-25 w-300"
              />
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 space-y-6">
        {/* Title */}
        <div className="container mx-auto p-6">
          <div className="pb-7">
            <h2 className="text-3xl font-semibold text-blue-900 pb-3">
              Form Pengajuan Surat Rekomendasi
            </h2>
            <p className="text-sm text-orange-400 mt-1">
              Pastikan data diri Anda sudah terupdate ya! Data yang akurat akan
              sangat membantu kami dalam proses evaluasi dan seleksi. Jangan
              ragu untuk mengedit profil Anda jika ada perubahan.
            </p>
          </div>

          {/* Instansi Tujuan */}
          <div className="pb-7">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instansi Tujuan <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="instansi"
              value={formData.instansi}
              onChange={handleChange}
              placeholder="Masukkan Nama Instansi"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-white-400 focus:ring-2 focus:ring-blue-300 bg-white"
            />
          </div>

          {/* Keperluan & Tanggal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-7">
            {/* Keperluan Rekomendasi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keperluan Rekomendasi
              </label>
              <div className="relative">
                <select
                  name="keperluan"
                  value={formData.keperluan}
                  onChange={handleChange}
                  className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 bg-white"
                >
                  <option value="" disabled>
                    Pilih Keperluan Surat Rekomendasi
                  </option>
                  <option value="akademis">Akademis</option>
                  <option value="beasiswa">Beasiswa</option>
                  <option value="pekerjaan">Pekerjaan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            {/* Tanggal Dibutuhkan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Dibutuhkan
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-300 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Detail Tambahan */}
          <div className="pb-7">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Detail Tambahan
            </label>
            <textarea
              name="detail"
              rows={3}
              value={formData.detail}
              onChange={handleChange}
              placeholder="Masukkan Detail Pengajuan Surat Rekomendasi (contoh: Saya memohon surat rekomendasi ini sebagai bagian... )"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 bg-white"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
      <div className="py-20 px-6 mx-auto container">
        <div className="bg-white rounded-2xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] ">
          <h2 className="text-3xl font-bold text-blue-900">
            Status Pengajuan Surat Rekomendasi
          </h2>
          <div className="flex justify-center pt-20 mb-4">
            <img
              src="/images/recommendation-letter/status-pengajuan-surat.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center text-gray-400 pb-20 text-lg">
            <p>Belum ajukan Surat Rekomendasi?</p>
            <p>Yuk, lakukan sekarang!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecommendationSection;
