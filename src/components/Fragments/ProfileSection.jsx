import { Plus, SquarePen, X, Trash2 } from "lucide-react";

import React, { useState } from "react";
import {
  AchievementsData,
  InvolvementsData,
} from "../../assets/data/AchievementsInvolvementsData";

export function ProfileHeader({ name, program, batch, year, imageUrl }) {
  return (
    <div className="flex items-center space-x-6 pb-15">
      <div className="w-52 h-52 rounded-full overflow-hidden flex-shrink-0 ml-5">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col ml-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h1>
        <div className="mt-2 flex items-center text-lg text-black font-semibold">
          <span className="inline-block bg-purple-100 text-purple-700 rounded-full px-10 py-1 font-medium">
            {program}
          </span>
          <span className="mx-3">&bull;</span>
          <span className="font-medium">{batch}</span>
          <span className="mx-3">&bull;</span>
          <span className="font-medium">{year}</span>
        </div>
      </div>
    </div>
  );
}

export function ProfileSelfDataForm() {
  const [isEditing, setIsEditing] = useState(false);

  // form state
  const [form, setForm] = useState({
    phone: "08123456789",
    nik: "3278209912027770",
    university: "Amikom Yogyakarta University",
    major: "Sistem Informasi",
    email: "alhan@bcf.co.id",
    batch: "2022",
    address: "JL. Gatau dimana pokonya ditangerang",
    province: "Tangerang",
  });

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // shared input classes
  const baseInput = "w-full rounded-xl px-4 py-2 focus:outline-none transition";
  const viewClasses = "text-gray-500 border border-gray-300";
  const editClasses = "border-1 border-blue-500";

  return (
    <div className="p-6 mb-10 rounded-2xl bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)]">
      {/* header toolbar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Data Diri</h2>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center bg-[#0D4690] border-2 border-[#0D4690] cursor-pointer text-white rounded-3xl w-29 justify-center py-2 hover:bg-blue-800 transition"
          >
            <SquarePen className="w-5 h-5 mr-1" />
            Edit
          </button>
        ) : (
          <div className="space-x-4">
            <button
              onClick={handleCancel}
              className="w-29 py-2 border-2 border-[#0D4690] rounded-3xl cursor-pointer hover:bg-gray-50 transition font-medium text-[#0D4690]"
            >
              Batalkan
            </button>
            <button
              onClick={handleSave}
              className="w-29 py-2 border-2 border-[#0D4690] bg-[#0D4690] text-white cursor-pointer rounded-3xl hover:bg-blue-800 transition"
            >
              Simpan
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/** LEFT COLUMN **/}
        <div className="space-y-6">
          {[
            { label: "No Handphone", field: "phone", type: "text" },
            {
              label: "Nomor Induk Kependudukan (NIK)",
              field: "nik",
              type: "text",
            },
            { label: "Asal Universitas", field: "university", type: "text" },
            { label: "Jurusan", field: "major", type: "text" },
          ].map(({ label, field, type }) => (
            <div key={field} className="relative">
              <label className="block text-md font-medium mb-1">{label}</label>
              <input
                type={type}
                value={form[field]}
                onChange={handleChange(field)}
                disabled={!isEditing}
                className={`${baseInput} ${
                  isEditing ? editClasses : viewClasses
                }`}
              />
              {isEditing && (
                <SquarePen className="absolute right-3 top-10 w-5 h-5 text-blue-500" />
              )}
            </div>
          ))}
        </div>

        {/** RIGHT COLUMN **/}
        <div className="space-y-6">
          {[
            { label: "Email", field: "email", type: "email" },
            { label: "Angkatan", field: "batch", type: "text" },
            { label: "Alamat Domisili", field: "address", type: "text" },
            { label: "Provinsi Domisili", field: "province", type: "text" },
          ].map(({ label, field, type }) => (
            <div key={field} className="relative">
              <label className="block text-md font-medium mb-1">{label}</label>
              <input
                type={type}
                value={form[field]}
                onChange={handleChange(field)}
                disabled={!isEditing}
                className={`${baseInput} ${
                  isEditing ? editClasses : viewClasses
                }`}
              />
              {isEditing && (
                <SquarePen className="absolute right-3 top-10 w-5 h-5 text-blue-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfilePlacementDataForm() {
  return (
    <div className="p-6 pb-15 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)] mb-13">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Penempatan</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <label className="block text-md font-medium mb-1">Lembaga</label>
            <input
              type="text"
              value="Bakrie Center Foundation"
              readOnly
              className="text-gray-500 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-md font-medium mb-1">
              Lokasi Penempatan
            </label>
            <input
              type="text"
              value="Jakarta Selatan"
              readOnly
              className="text-gray-500 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <label className="block text-md font-medium mb-1">Provinsi</label>
            <input
              type="email"
              value="DKI Jakarta"
              readOnly
              className="text-gray-500 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-md font-medium mb-1">
              Asal Universitas
            </label>
            <input
              type="text"
              value="Politeknik Amikom Yogyakarta"
              readOnly
              className="text-gray-500 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileProfessionalExperience() {
  // initial data
  const [experiences, setExperiences] = useState([
    {
      company: "Bakrie Center Foundation",
      role: "Manager",
      start: "2024-06",
      end: "2024-09",
      currently: false,
    },
    {
      company: "Bank Majapahit",
      role: "Assistant Manager Human Capital",
      start: "2023-10",
      end: "2024-05",
      currently: false,
    },
  ]);

  // UI states
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  // form state
  const emptyForm = {
    company: "",
    role: "",
    start: "",
    end: "",
    currently: false,
  };
  const [form, setForm] = useState(emptyForm);

  // handlers
  const openAdd = () => {
    setForm(emptyForm);
    setIsAddOpen(true);
  };

  const openEdit = (idx) => {
    setForm({ ...experiences[idx] });
    setSelectedIdx(idx);
  };

  const handleField = (field) => (e) => {
    const val = field === "currently" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: val }));
  };

  const canSave =
    form.company && form.role && (form.currently || (form.start && form.end));

  const handleAddSave = () => {
    setExperiences((arr) => [...arr, form]);
    setIsAddOpen(false);
  };

  const handleEditSave = () => {
    if (selectedIdx === null) return;
    setExperiences((arr) => {
      const copy = [...arr];
      copy[selectedIdx] = form;
      return copy;
    });
    setSelectedIdx(null);
    setIsEditMode(false);
  };

  const handleDelete = () => {
    if (selectedIdx === null) return;
    setExperiences((arr) => arr.filter((_, i) => i !== selectedIdx));
    setSelectedIdx(null);
    setIsEditMode(false);
  };

  const formatMonthYear = (yyyyMm) => {
    if (!yyyyMm) return "";
    // append “-01” so JS treats it as a valid YYYY-MM-DD
    const dt = new Date(`${yyyyMm}-01`);
    return dt.toLocaleString("en-EN", { month: "long", year: "numeric" });
  };

  return (
    <>
      <div
        className={`p-6 pb-15 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)] mb-13 ${
          isEditMode ? "bg-[#f0f1f5]" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Pengalaman Profesional</h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={openAdd}
              className="flex items-center bg-[#0D4690] text-white rounded-3xl px-6 py-2 font-medium hover:bg-blue-800 transition cursor-pointer"
            >
              <Plus className="w-5 h-5 mr-1" /> Add
            </button>
            <button
              onClick={() => {
                setIsEditMode((v) => !v);
                setSelectedIdx(null);
              }}
              className={`flex items-center rounded-3xl px-6 py-2 transition border cursor-pointer font-medium ${
                isEditMode
                  ? "bg-gray-200 text-gray-600 border-gray-400"
                  : "bg-[#0D4690] text-white border-[#0D4690] hover:bg-blue-800"
              }`}
            >
              {isEditMode ? (
                <X className="w-5 h-5 mr-1" />
              ) : (
                <SquarePen className="w-5 h-5 mr-1" />
              )}
              {isEditMode ? "Close" : "Edit"}
            </button>
          </div>
        </div>

        {isEditMode && (
          <p className="text-red-600 mb-4">
            * Pilih kegiatan yang ingin diubah
          </p>
        )}

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const startLabel = formatMonthYear(exp.start);
            const endLabel = exp.currently
              ? ""
              : ` – ${formatMonthYear(exp.end)}`;

            const period = exp.currently
              ? `${startLabel} – Present`
              : `${startLabel}${endLabel}`;
            return (
              <div
                key={idx}
                onClick={() => isEditMode && openEdit(idx)}
                className={`flex justify-between items-center p-4 rounded-lg ${
                  isEditMode
                    ? "cursor-pointer rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.12)] hover:bg-[#E89229]/18"
                    : ""
                }`}
              >
                <div>
                  <h3 className="text-[#0D4690] font-bold">{exp.company}</h3>
                  <p className="">{exp.role}</p>
                </div>
                <p className="font-semibold text-[#E89229]">{period}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Modal */}
      {isAddOpen && (
        <Modal
          title="Add Pengalaman Profesional"
          onClose={() => setIsAddOpen(false)}
        >
          <FormBody
            form={form}
            handleField={handleField}
            canSave={canSave}
            onCancel={() => setIsAddOpen(false)}
            onSave={handleAddSave}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {selectedIdx !== null && (
        <Modal
          title="Edit Pengalaman Profesional"
          onClose={() => {
            setSelectedIdx(null);
            setIsEditMode(false);
          }}
        >
          <FormBody
            form={form}
            handleField={handleField}
            canSave={canSave}
            onCancel={() => {
              setSelectedIdx(null);
              setIsEditMode(false);
            }}
            onSave={handleEditSave}
            onDelete={handleDelete}
            deleteLabel="Hapus"
          />
        </Modal>
      )}
    </>
  );
}

// Modal wrapper
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} className="cursor-pointer" />
        </button>
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        {children}
      </div>
    </div>
  );
}

// Shared form body
function FormBody({
  form,
  handleField,
  canSave,
  onCancel,
  onSave,
  onDelete,
  deleteLabel,
}) {
  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Nama Perusahaan
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Perusahaan"
            value={form.company}
            onChange={handleField("company")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="currently"
            type="checkbox"
            checked={form.currently}
            onChange={handleField("currently")}
            className="w-4 h-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="currently" className="text-sm">
            Saya masih bekerja sampai saat ini
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mulai</label>
            <input
              type="month"
              disabled={form.currently}
              value={form.start}
              onChange={handleField("start")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Selesai</label>
            <input
              type="month"
              disabled={form.currently}
              value={form.end}
              onChange={handleField("end")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Posisi</label>
          <input
            type="text"
            placeholder="Masukkan Posisi Anda"
            value={form.role}
            onChange={handleField("role")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        {onDelete && (
          <button
            onClick={onDelete}
            className="flex items-center border border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50 transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4 mr-1" /> {deleteLabel}
          </button>
        )}
        <button
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
        >
          Batalkan
        </button>
        <button
          onClick={onSave}
          disabled={!canSave}
          className={`px-4 py-2 rounded-lg text-white cursor-pointer ${
            canSave
              ? "bg-[#0D4690] hover:bg-blue-800"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Simpan
        </button>
      </div>
    </>
  );
}

export function ProfileInvolvementAchievement() {
  const COLLAPSED_COUNT = 3;

  // INVOLVEMENTS SECTION STATE
  const [invExpanded, setInvExpanded] = useState(false);

  // ACHIEVEMENTS SECTION STATE
  // (1) data achievements di‐clone dari AchievementsData, lalu diberi unique id
  const [achievements, setAchievements] = useState(() =>
    AchievementsData.map((item, idx) => ({
      id: idx + 1,
      acara: item.org, // "org" → "acara"
      kontribusi: item.type, // "type" → "kontribusi"
      year: item.year, // tahun string (seperti "2024")
      prestasi: item.title, // "title" → "prestasi"
    }))
  );
  // (2) apakah semua daftar achievements ditampilkan atau hanya 3 pertama
  const [achExpanded, setAchExpanded] = useState(false);
  // (3) apakah kita sedang dalam "edit mode" untuk Achievement
  const [isEditAchMode, setIsEditAchMode] = useState(false);
  // (4) id achievement yang dipilih untuk diedit
  const [selectedAchId, setSelectedAchId] = useState(null);
  // (5) state untuk mengontrol modal edit muncul/tidak
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // (6) state untuk mengontrol modal add muncul/tidak
  const [isAddAchOpen, setIsAddAchOpen] = useState(false);

  // ===== FORM STATE UNTUK EDIT / ADD (DI ACHIEVEMENTS) =====
  const [achForm, setAchForm] = useState({
    acara: "",
    kontribusi: "",
    year: "",
    prestasi: "",
  });

  // validasi agar tombol "Simpan" aktif hanya jika semua field terisi
  const canSaveAch =
    achForm.acara.trim() !== "" &&
    achForm.kontribusi.trim() !== "" &&
    achForm.year.trim() !== "" &&
    achForm.prestasi.trim() !== "";

  // Utility: format tahun (bisa Anda extend jadi "Month Year" jika diperlukan)
  const formatYear = (year) => {
    if (!year) return "";
    // Jika format "YYYY-MM", ambil bagian tahun saja
    return year.split("-")[0];
  };

  //  HANDLER ACHIEVEMENTS

  // (1) Toggle "edit mode" untuk Achievements
  const toggleEditAchMode = () => {
    setIsEditAchMode((prev) => !prev);
    setSelectedAchId(null);
  };

  // (2) Saat user klik satu kartu di mode edit, buka modal & pre‐fill form
  const openEditAchModal = (id) => {
    const item = achievements.find((ach) => ach.id === id);
    if (!item) return;
    setAchForm({
      acara: item.acara,
      kontribusi: item.kontribusi,
      year: item.year,
      prestasi: item.prestasi,
    });
    setSelectedAchId(id);
    setIsEditModalOpen(true);
  };

  // (3) Tutup modal edit (tanpa menyimpan)
  const closeEditAchModal = () => {
    setIsEditModalOpen(false);
    setSelectedAchId(null);
    setAchForm({ acara: "", kontribusi: "", year: "", prestasi: "" });
  };

  // (4) Handle perubahan setiap field
  const handleAchField = (field) => (e) => {
    setAchForm((f) => ({ ...f, [field]: e.target.value }));
  };

  // (5) Simpan hasil editing ke dalam array achievements
  const handleSaveEditAch = () => {
    if (selectedAchId === null) return;
    setAchievements((prev) =>
      prev.map((ach) =>
        ach.id === selectedAchId
          ? {
              ...ach,
              acara: achForm.acara.trim(),
              kontribusi: achForm.kontribusi,
              year: achForm.year,
              prestasi: achForm.prestasi.trim(),
            }
          : ach
      )
    );
    closeEditAchModal();
    setIsEditAchMode(false);
  };

  // (6) Hapus item achievement yang sedang dipilih
  const handleDeleteAch = () => {
    if (selectedAchId === null) return;
    setAchievements((prev) => prev.filter((ach) => ach.id !== selectedAchId));
    closeEditAchModal();
    setIsEditAchMode(false);
  };

  // (7) Handle buka modal Add Achievement
  const handleOpenAddAch = () => {
    setAchForm({ acara: "", kontribusi: "", year: "", prestasi: "" });
    setIsAddAchOpen(true);
  };

  // (8) Handle tutup modal Add Achievement
  const handleCloseAddAch = () => {
    setIsAddAchOpen(false);
    setAchForm({ acara: "", kontribusi: "", year: "", prestasi: "" });
  };

  // (9) Handle simpan achievement baru
  const handleAchSave = () => {
    const nextId =
      achievements.length > 0
        ? Math.max(...achievements.map((a) => a.id)) + 1
        : 1;

    setAchievements((prev) => [
      ...prev,
      {
        id: nextId,
        acara: achForm.acara.trim(),
        kontribusi: achForm.kontribusi,
        year: achForm.year,
        prestasi: achForm.prestasi.trim(),
      },
    ]);
    handleCloseAddAch();
  };

  // RENDER INVOLVEMENTS
  const invToShow = invExpanded
    ? InvolvementsData
    : InvolvementsData.slice(0, COLLAPSED_COUNT);

  // RENDER ACHIEVEMENTS
  const achToShow = achExpanded
    ? achievements
    : achievements.slice(0, COLLAPSED_COUNT);

  return (
    <>
      <main className="flex flex-col md:flex-row md:items-start gap-6">
        {/* INVOLVEMENTS */}
        <section className="w-full md:w-1/2 bg-[#EBF2FF] p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#0d4690]">Involvements</h2>
          </div>
          <div className="space-y-4">
            {invToShow.map((inv, i) => (
              <EntryCard key={i} item={inv} />
            ))}
          </div>
          {InvolvementsData.length > COLLAPSED_COUNT && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setInvExpanded((v) => !v)}
                className="w-full px-4 py-2 font-semibold text-[#0d4699] border-2 border-[#0d4699] rounded-xl hover:bg-blue-100 transition"
              >
                {invExpanded ? "Hide" : "Show All"}
              </button>
            </div>
          )}
        </section>

        {/* ACHIEVEMENTS */}
        <section className="w-full md:w-1/2 bg-[#EBF2FF] p-6 rounded-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#0d4690]">Achievements</h2>
            <div className="flex space-x-3">
              {/* Add Achievement */}
              <button
                onClick={handleOpenAddAch}
                className="flex items-center cursor-pointer px-3 py-1.5 font-semibold text-[#0d4690] border-2 border-[#0d4690] rounded-xl hover:bg-blue-100 transition"
              >
                <Plus className="w-5 h-5 mr-1" /> Add
              </button>

              {/* Toggle Edit Mode */}
              <button
                onClick={toggleEditAchMode}
                className={`flex items-center cursor-pointer px-3 py-1.5 font-semibold rounded-xl transition
                ${
                  isEditAchMode
                    ? "bg-gray-200 text-gray-600 border border-gray-400"
                    : "text-[#0d4690] border-2 border-[#0d4690] hover:bg-blue-100"
                }`}
              >
                {isEditAchMode ? (
                  <X className="w-5 h-5 mr-1" />
                ) : (
                  <SquarePen className="w-5 h-5 mr-1" />
                )}
                {isEditAchMode ? "Close" : "Edit"}
              </button>
            </div>
          </div>

          {/* Pesan "Pilih kegiatan yang ingin diubah" */}
          {isEditAchMode && (
            <p className="text-red-600 mb-4 text-sm">
              * Pilih kegiatan yang ingin diubah
            </p>
          )}

          {/* Daftar Kartu Achievements - Using EntryCard Layout */}
          <div className="space-y-4">
            {achToShow.map((ach) => (
              <div
                key={ach.id}
                onClick={() => isEditAchMode && openEditAchModal(ach.id)}
                className={`bg-white p-4 rounded-xl shadow-sm flex justify-between items-center transition
                  ${
                    isEditAchMode
                      ? "cursor-pointer border-2 border-dashed border-[#E89229] hover:bg-[#FFF7EC]"
                      : ""
                  }`}
              >
                <div>
                  <h3 className="text-[#0d4690] font-bold mb-1">
                    {ach.prestasi}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <span>{ach.acara}</span>
                    <span className="text-[#adb5bd]">•</span>
                    <span className="px-2 py-1 border border-[#e89229] text-[#e89229] bg-[#fdf6f2] rounded-full text-sm">
                      {ach.kontribusi}
                    </span>
                  </div>
                  <p className="text-[#e89229] font-semibold mt-1">
                    {formatYear(ach.year)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Show All / Hide */}
          {achievements.length > COLLAPSED_COUNT && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setAchExpanded((v) => !v)}
                className="w-full px-4 py-2 font-semibold text-[#0d4690] border-2 border-[#0d4690] rounded-xl hover:bg-blue-100 transition"
              >
                {achExpanded ? "Hide" : "Show All"}
              </button>
            </div>
          )}
        </section>
      </main>

      {/* MODAL ADD ACHIEVEMENT */}
      {isAddAchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 mx-4">
            {/* Close */}
            <button
              onClick={handleCloseAddAch}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-semibold mb-6">Add Achievement</h3>

            <div className="space-y-4">
              {/* Acara */}
              <div>
                <label className="block text-sm font-medium mb-1">Acara</label>
                <input
                  type="text"
                  value={achForm.acara}
                  onChange={handleAchField("acara")}
                  placeholder="Nama acara"
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none"
                />
              </div>

              {/* Kontribusi BCF & Tahun */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Kontribusi BCF
                  </label>
                  <select
                    value={achForm.kontribusi}
                    onChange={handleAchField("kontribusi")}
                    className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-blue-600"
                  >
                    <option value="">Pilih kontribusi</option>
                    <option value="Langsung">Langsung</option>
                    <option value="Tidak Langsung">Tidak Langsung</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tahun
                  </label>
                  <input
                    type="month"
                    value={achForm.year}
                    onChange={handleAchField("year")}
                    placeholder="2024"
                    className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none"
                  />
                </div>
              </div>

              {/* Prestasi */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Prestasi
                </label>
                <input
                  type="text"
                  value={achForm.prestasi}
                  onChange={handleAchField("prestasi")}
                  placeholder="Contoh: 1st Place UI/UX 2024"
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Save */}
            <div className="mt-6 text-right">
              <button
                disabled={!canSaveAch}
                onClick={handleAchSave}
                className={`w-full py-3 text-white rounded-lg ${
                  canSaveAch
                    ? "bg-[#0d4690] hover:bg-blue-800 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  MODAL EDIT ACHIEVEMENT  */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 mx-4">
            {/* Tombol Tutup (X) */}
            <button
              onClick={closeEditAchModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} className="cursor-pointer" />
            </button>
            <h3 className="text-xl font-semibold mb-6 text-[#0D4690]">
              Edit Achievement
            </h3>

            {/* Form Edit */}
            <div className="space-y-4">
              {/* Acara */}
              <div>
                <label className="block text-sm font-medium mb-1">Acara</label>
                <input
                  type="text"
                  value={achForm.acara}
                  onChange={handleAchField("acara")}
                  placeholder="Nama acara"
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Kontribusi BCF */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Kontribusi BCF
                </label>
                <select
                  value={achForm.kontribusi}
                  onChange={handleAchField("kontribusi")}
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Pilih kontribusi</option>
                  <option value="Langsung">Langsung</option>
                  <option value="Tidak Langsung">Tidak Langsung</option>
                </select>
              </div>

              {/* Tahun */}
              <div>
                <label className="block text-sm font-medium mb-1">Tahun</label>
                <input
                  type="text"
                  value={achForm.year}
                  onChange={handleAchField("year")}
                  placeholder="2024"
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Prestasi */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Prestasi
                </label>
                <input
                  type="text"
                  value={achForm.prestasi}
                  onChange={handleAchField("prestasi")}
                  placeholder="Contoh: 1st Place UI/UX 2024"
                  className="w-full border-2 border-[#0d4690] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Tombol Aksi: Hapus, Batalkan, Simpan */}
            <div className="mt-6 flex justify-end space-x-4">
              {/* Hapus */}
              <button
                onClick={() => {
                  handleDeleteAch();
                }}
                className="flex items-center border border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50 transition"
              >
                <Trash2 className="w-4 h-4 mr-1" /> Hapus
              </button>
              {/* Batalkan */}
              <button
                onClick={closeEditAchModal}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
              >
                Batalkan
              </button>
              {/* Simpan */}
              <button
                onClick={handleSaveEditAch}
                disabled={!canSaveAch}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  canSaveAch
                    ? "bg-[#0D4690] hover:bg-blue-800"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EntryCard({ item }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
      <div>
        <h3 className="text-[#0d4690] font-bold mb-1">{item.title}</h3>
        <div className="flex items-center space-x-2 text-gray-700">
          <span>{item.org}</span>
          <span className="text-[#adb5bd]">•</span>
          <span className="px-2 py-1 border border-[#e89229] text-[#e89229] bg-[#fdf6f2] rounded-full text-sm">
            {item.type}
          </span>
        </div>
        <p className="text-[#e89229] font-semibold mt-1">{item.year}</p>
      </div>
    </div>
  );
}
