export default function RLStatus() {
  return (
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
  );
}
