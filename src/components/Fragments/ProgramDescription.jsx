const ProgramDescription = () => {
  return (
    <section id="program-description" className="container mx-auto">
      <div className="deskripsi-program py-10 px-6">
        {/* Section Program Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/deskripsi-program/deskripsi-program.png"
            className="w-2xl"
          />

          {/* Section Deskripsi */}
          <div className="space-y-6">
            <div>
              <h2 className="text-blue-800 text-2xl font-bold mb-2">
                Deskripsi Program
              </h2>
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-justify">
                Forum ikatan alumni lintas generasi – Home of Leaders dari
                program-program Bakrie Center Foundation (Bakrie Graduate
                Fellowship, LEAD Indonesia, dan Campus Leaders Program), untuk
                dapat saling berkolaborasi dan menjalin kerja sama strategis
                dalam mencapai percepatan Tujuan Pembangunan Berkelanjutan
                (Sustainable Development Goals (SDGs)) melalui cluster utama
                yang menjadi concern Bakrie Center Foundation.
              </p>
            </div>

            {/* Visi dan Misi */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-xl w-full md:w-1/2">
                <h3 className="text-orange-600 font-bold text-lg mb-2">Visi</h3>
                <p>
                  Terciptanya alumni BCF yang berdaya melalui kolaborasi
                  penanganan isu kesehatan, pendidikan, dan lingkungan secara
                  berkelanjutan di tingkat nasional.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-xl w-full md:w-1/2">
                <h3 className="text-orange-600 font-bold text-lg mb-2">Misi</h3>
                <p>
                  Peningkatan kontribusi dan solidaritas alumni BCF dalam
                  pembinaan kapasitas penggiat sosial dan pengembangan
                  penelitian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDescription;
