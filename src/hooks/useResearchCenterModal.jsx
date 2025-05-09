import { useState } from "react";

const useResearchCenterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    file: null,
    citation: "",
  });

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // bisa diganti kirim ke backend
    handleClose();
  };

  return {
    isModalOpen,
    formData,
    handleOpen,
    handleClose,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useResearchCenterModal;
