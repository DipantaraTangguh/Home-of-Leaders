import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Plus, X, Search } from "lucide-react";
import Navbar from "../components/Layouts/Navbar";
import prosidingData from "../assets/data/prosidingData";

const ResearchCenterProsidingPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    file: null,
    citation: "",
  });

  // modal handlers
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <section>
      <Navbar />
      <div className="py-6 px-15 container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-900">Prosiding</h1>
        </div>

        {/* Total Research */}
        <p className="text-gray-600 mb-4">
          Total Research {prosidingData.length}
        </p>

        {/* Search & Add */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Cari Judul Research"
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            onClick={handleOpen}
            className="flex items-center h-11 bg-blue-800 text-white rounded-full px-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Plus size={18} /> Add
          </button>
        </div>

        {/* Daftar Kartu Publikasi */}
        <div className="grid md:grid-cols-2 gap-6">
          {prosidingData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md flex p-6 gap-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-44 object-cover rounded-md"
              />

              <div className="flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <div className="grid grid-cols-2 text-sm text-gray-700 mb-4">
                  <div>
                    <span className="font-medium block mb-1">Status</span>
                    <span className="bg-green-100 text-green-800 px-5 py-1 rounded-full text-md">
                      {item.status || "-"}
                    </span>
                  </div>
                  <div className="md:border-l-2 md:pl-5">
                    <span className="font-medium block mb-1">
                      Tanggal Publish
                    </span>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays size={16} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(`/research-center/prosiding/${item.slug}`)
                  }
                  className="self-end border border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-50 transition cursor-pointer"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-3xl mx-4 rounded-xl overflow-hidden shadow-lg">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold text-blue-900">
                  Add Research
                </h2>
                <button onClick={handleClose} className="cursor-pointer">
                  <X size={24} className="text-gray-600 hover:text-gray-800" />
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="max-h-[80vh] overflow-y-auto p-6 space-y-6"
              >
                {/* Judul */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Judul Research
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Masukkan Judul Research"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
                {/* Abstract */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Abstract
                  </label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder="Masukkan ringkasan atau abstrak"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
                  />
                </div>
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    File Research
                  </label>
                  <div className="flex items-center border border-dashed border-gray-400 rounded-lg p-4">
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="fileInput"
                      className="flex items-center gap-2 cursor-pointer text-blue-800"
                    >
                      <Plus size={16} />
                      <span>Upload</span>
                    </label>
                    {formData.file && (
                      <span className="ml-4 text-sm">{formData.file.name}</span>
                    )}
                  </div>
                </div>
                {/* Sitasi */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Sitasi
                  </label>
                  <input
                    type="text"
                    name="citation"
                    value={formData.citation}
                    onChange={handleChange}
                    placeholder="Masukkan Sitasi Research Anda"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                  disabled={!formData.title}
                >
                  Publikasi
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchCenterProsidingPage;
