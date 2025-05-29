import React from "react";
import { Plus, X } from "lucide-react";

const ResearchCenterModal = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  onChange,
  onFileChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-3xl mx-4 rounded-xl overflow-hidden shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-blue-900">Add Research</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X size={24} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <form
          onSubmit={onSubmit}
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
              onChange={onChange}
              placeholder="Masukkan Judul Research"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Abstract */}
          <div>
            <label className="block text-sm font-medium mb-1">Abstract</label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={onChange}
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
                onChange={onFileChange}
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
            <label className="block text-sm font-medium mb-1">Sitasi</label>
            <input
              type="text"
              name="citation"
              value={formData.citation}
              onChange={onChange}
              placeholder="Masukkan Sitasi Research Anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0D4690] cursor-pointer text-white py-3 rounded-lg font-semibold disabled:opacity-50"
            disabled={!formData.title}
          >
            Publikasi
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResearchCenterModal;
