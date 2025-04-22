import { FaEnvelope, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-[#E1E3EB] py-10 px-6">
        <div className="max-w-[85vw] mx-auto grid gap-10 md:grid-cols-3">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-items-start items-center mb-4">
              <img
                src="/images/logos/hol-logo.png"
                alt="HOL Logo"
                className="h-11 sm:h-11 md:h-13 lg:h-15"
              />
              <img
                src="/images/logos/bcf-logo.png"
                alt="BCF Logo"
                className="h-11 sm:h-11 md:h-13 lg:h-15"
              />
            </div>
            <p className="text-sm text-gray-700 max-w-md">
              Forum Informasi Alumni Bakrie Center Foundation, mendukung
              kolaborasi untuk percepatan SDGs melalui cluster utama yang jadi
              fokusnya.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h4 className="font-semibold text-blue-800 mb-3">Menu</h4>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>
                <a href="#" className="hover:text-blue-800">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">
                  Alumni Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">
                  Advocacy Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">
                  Surat Rekomendasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-blue-800 mb-3">Hubungi Kami</h4>
            <p className="text-sm text-gray-800">info@bcf.id</p>
            <p className="text-sm text-gray-800 mt-2 max-w-full">
              Wisma Bakrie 2nd Floor Jl. H. R. Rasuna Said, RT.5/RW.5, Kuningan,
              Karet, Kecamatan Setiabudi, Jakarta, Daerah Khusus Ibukota Jakarta
              12920
            </p>
            <div className="flex text-blue-800 space-x-5 mt-3">
              <a href="https://www.instagram.com/bakriecenter/">
                <FaInstagram className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/company/home-of-leaders/">
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a href="http://www.youtube.com/@bakriecenter">
                <FaYoutube className="w-7 h-7" />
              </a>
              <a href="#">
                <FaEnvelope className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 py-4 px-6">
        <p className="text-center text-xs text-white">
          Copyright {new Date().getFullYear()} IT HOL Bakrie Center Foundation,
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
