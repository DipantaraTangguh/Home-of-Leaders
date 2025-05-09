export default function RLTimelineCard() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 md:-mt-40">
      <div className="bg-white rounded-[60px] p-8 shadow-xl overflow-hidden relative ">
        <div>
          <h2 className="font-bold text-blue-900 text-2xl mt-10 ml-10">
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
