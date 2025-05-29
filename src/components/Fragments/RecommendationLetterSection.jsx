import React, { useState } from "react";
import { Calendar, ChevronDown, Download } from "lucide-react";
import recommendationLetterStatusData from "../../assets/data/recomendationLetterStatusData";

export function RLHeaderBanner() {
  return (
    <div className="bg-sky-50 rounded-[60px] pt-12 pb-20 px-6 text-center h-130">
      <h2 className="text-3xl font-bold mb-4 text-[#0D4690]">
        Surat Rekomendasi
      </h2>
      <p className="mx-auto leading-relaxed px-5 max-w-250">
        Surat rekomendasi bisa jadi 'tiket' menuju kesuksesan. Surat ini bisa
        membantu kamu{" "}
        <span className="font-semibold text-[#E89229]">
          membuktikan kemampuan dan potensi diri
        </span>
        , terutama saat melamar pekerjaan atau beasiswa.{" "}
        <span className="font-semibold text-[#E89229]">Batas maksimal</span>{" "}
        pengajuan surat rekomendasi adalah{" "}
        <span className="font-semibold text-[#E89229]">seminggu</span> sebelum
        surat rekomendasi itu dibutuhkan.
      </p>
    </div>
  );
}

export function RLTimelineCard() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 md:-mt-70">
      <div className="bg-white rounded-[60px] p-8 shadow-xl overflow-hidden relative ">
        <div>
          <h2 className="font-bold text-[#0D4690] text-2xl mt-10 ml-10">
            Proses Pengajuan Surat Rekomendasi
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/recommendation-letter/proses-pengajuan-2.png"
            alt="image"
            className="md:py-25 w-300"
          />
        </div>
      </div>
    </div>
  );
}

export function RLSubmitForm() {
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
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 space-y-6">
      {/* Title */}
      <div className="container mx-auto p-6">
        <div className="pb-7">
          <h2 className="text-3xl font-bold text-[#0D4690] pb-3">
            Form Pengajuan Surat Rekomendasi
          </h2>
          <p className="text-sm text-[#E89229] mt-1">
            Pastikan data diri Anda sudah terupdate ya! Data yang akurat akan
            sangat membantu kami dalam proses evaluasi dan seleksi. Jangan ragu
            untuk mengedit profil Anda jika ada perubahan.
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
            className="bg-[#0D4690] text-white font-semibold px-6 py-2 cursor-pointer rounded-full hover:bg-blue-800 transition disabled:opacity-50"
          >
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
}

export function RLStatusNull() {
  return (
    <div className="py-20 px-6 mx-auto container">
      <div className="bg-white rounded-2xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] ">
        <h2 className="text-3xl font-bold text-[#0D4690]">
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
  );
}

export function RLStatusContent() {
  const statusStyles = {
    Approved: "text-green-600 bg-green-100",
    Checking: "text-yellow-600 bg-yellow-100",
    Rejected: "text-red-600 bg-red-100",
  };

  return (
    <div className="my-20 pb-20 px-6 mx-auto container rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
      <h2 className="text-3xl font-bold text-blue-900 py-10">
        Status Pengajuan Surat Rekomendasi
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b border-[#ADB5BD] text-[#ADB5BD] text-left text-sm ">
              <th className="px-4 py-5 w-12">No</th>
              <th className="px-4 py-5">Tujuan Instansi</th>
              <th className="px-4 py-5">Keperluan</th>
              <th className="px-4 py-5">Tanggal Pengajuan</th>
              <th className="px-4 py-5">Status</th>
              <th className="px-4 py-5 w-32">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {recommendationLetterStatusData.map((item) => (
              <tr key={item.id} className="border-b border-[#ADB5BD] ">
                <td className="px-4 py-8 text-sm text-gray-600">{item.id}.</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {item.instansi}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {item.keperluan}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {item.tanggal}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block text-center min-w-24 py-1 text-sm font-medium rounded-full ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className={`flex items-center justify-center w-full py-2 px-2 text-sm font-medium rounded-xl ${
                      item.status === "Approved"
                        ? "border-2 border-[#E89229] bg-[#E89229] text-white hover:bg-white hover:text-[#E89229] cursor-pointer transition"
                        : "bg-[#ADB5BD] text-white cursor-not-allowed"
                    }`}
                    disabled={item.status !== "Approved"}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
