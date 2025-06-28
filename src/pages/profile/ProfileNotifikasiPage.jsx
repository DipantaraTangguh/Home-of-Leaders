import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import { cloneElement } from "react";
import { Footer } from "../../components/Layouts/Footer";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../../contexts/NotificationContext";

export default function ProfileNotifikasiPage() {
  const { notifications, markAllAsRead } = useNotifications();
  const navigate = useNavigate();

  return (
    <main>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-10 px-15 pb-15">
        <div className="border rounded-3xl border-gray-300 px-10 pt-4 pb-10">
          <div className="flex items-center justify-between my-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0d4690] mb-4">
                Notifikasi
              </h2>
              <p className="text-lg font-bold text-[#6C757D]">
                Total Notifikasi: {notifications.length}
              </p>
            </div>
            <button
              onClick={markAllAsRead}
              className="px-3 py-2 font-medium cursor-pointer bg-[#0d4690] text-white rounded-xl hover:bg-blue-900"
            >
              Sudah Baca
            </button>
          </div>

          <div className="max-h-130 overflow-y-auto">
            <ul className="space-y-4">
              {notifications.map((note) => (
                <li
                  key={note.id}
                  onClick={() => navigate(note.link)}
                  className={`group flex items-start justify-between px-4 py-6 cursor-pointer hover:bg-gray-50 border-b border-gray-300 ${
                    note.unread ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-start space-x-5">
                    {cloneElement(note.icon, {
                      size: 32,
                      className:
                        "stroke-[#0d4690] fill-transparent group-hover:fill-[#0d4690]",
                    })}
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg">{note.title}</h3>
                      <p className="text-sm">{note.message}</p>
                      <p className="text-xs mt-1">{note.time}</p>
                    </div>
                  </div>
                  {note.unread && (
                    <span className="self-start w-2 h-2 bg-red-500 rounded-full mt-1" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
