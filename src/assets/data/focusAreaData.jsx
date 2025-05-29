const centers = {
  alumni: {
    title: "Alumni Center",
    content: (
      <ul className="list-disc pl-5 ">
        <li>
          Berfokus untuk pembaharuan data alumni melalui link{" "}
          <a
            href="https://bit.ly/UpdatePendataanAlumniBCF"
            className="text-[#0d4690] font-semibold"
          >
            bit.ly/UpdatePendataanAlumniBCF
          </a>{" "}
          untuk <strong>mempermudah pemetaan alumni</strong> dalam kaitannya
          dengan <strong>perlibatan dan pemberdayaan</strong> alumni dalam
          kegiatan BCF
        </li>
        <li>
          <strong>Pencatatan milestone alumni</strong> untuk memberikan
          rekognisi kepada <strong>keterlibatan dan pencapaian alumni</strong>,
          baik di dalam maupun di luar kegiatan BCF
        </li>
        <li>
          Kegiatan <strong>bonding</strong> antar alumni melalui{" "}
          <strong>Gathering Nasional dan Leaders Townhall</strong> yang rutin
          diadakan setiap tahun
        </li>
        <li>
          Peningkatan kapasitas alumni di berbagai bidang melalui{" "}
          <strong>Leadership and Sustainability Training</strong>
        </li>
        <li>
          <strong>Sharing informasi peluang alumni</strong> dalam rubrik{" "}
          <strong>#CallforFellows</strong>
        </li>
      </ul>
    ),
  },
  commdev: {
    title: "CommDev Center",
    content: (
      <div>
        <p>
          Berfokus pada pengembangan kapasitas alumni yang merupakan pegiat
          sosial atau memiliki komunitas sosial pada isu SDGs untuk tetap
          berdampak luas di masyarakat, melalui:{" "}
        </p>
        <ul className="list-disc pl-5">
          <li>
            Penempatan lembaga sosial dari alumni LEAD Indonesia untuk mahasiswa
            magang dari Campus Leaders Program
          </li>
          <li>
            Pelibatan alumni sebagai Mentor Cluster maupun Mentor Desain Program
            dalam LEAD Indonesia
          </li>
          <li>
            Pelatihan bagi alumni terkait dengan Leadership and Sustainability
            yang juga menjadi implementasi dari Alumni Center
          </li>
        </ul>
      </div>
    ),
  },
  business: {
    title: "Business Center",
    content: (
      <p>
        Bertujuan untuk menghubungkan alumni yang memiliki usaha sosial
        (sociopreuneurship) dengan usaha maupun mitra strategis eksternal yang
        memiliki concern terkait. Fokus ini juga menjadi bagian dari
        implementasi Alumni Center dalam mengembangkan jaringan dan kolaborasi
        bagi alumni.
      </p>
    ),
  },
  research: {
    title: "Research Center",
    content: (
      <div>
        <p>
          Berfokus pada pengembangan{" "}
          <strong>pengembangan penelitian dan kajian</strong> terkait{" "}
          <strong>Sustainable Developement Goals (SDGs)</strong>, khususnya{" "}
          <strong>
            isu kesehatan, pendidikan, dan lingkungan oleh para alumni
          </strong>{" "}
          dengan latar belakang terkait (khususnya akademisi).{" "}
          <strong>Mengupayakan skema kolaborasi</strong> dengan dunia usaha,
          lembaga nasional dan internasional, universitas dan Sekretariat SDGs
          Bapennas melalui SDGs Hub yang dikembangkan bersama divisi Sustainable
          Development Initiative.
        </p>
        <img
          src="/images/bidang-fokus/research-center-img.png"
          alt="research-center"
          className="w-xs mt-4"
        />
      </div>
    ),
  },
  advocacy: {
    title: "Advocacy Center",
    content: (
      <div>
        <p>
          Berfokus untuk berperan{" "}
          <strong>
            dalam memberikan pengaruh pada level kebijakan daerah maupun
            nasional terkait permasalahan sosial yang diintervensi.
          </strong>{" "}
          implementasinya melalui:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Perlibatan alumni dengan latar belakang kompetensi dan perhatian
            pada isu terkait sebagai tim perumus Seminar Nasional mengenai SDGs,
            hingga perumusan rekomendasi kebijakan.
          </li>
          <li>
            Perlibatan alumni dengan kompetensi pada isu terkait sebagai
            pembicara, moderator/MC pada forum diskusi publik (Seminar Nasional
            (mulai tahun ini) bernama Indonesia Youth Sustainability Forum), dan
            kegiatan eksternal.{" "}
          </li>
        </ul>
      </div>
    ),
  },
};

export default centers;
