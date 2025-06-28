import React, { createContext, useContext, useState } from "react";
import { NotificationsRowData } from "../assets/data/NotificationsRowData"

const NotificationsContext = createContext();

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(NotificationsRowData);

  const markAllAsRead = () => {
    setNotifications((arr) => arr.map((n) => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <NotificationsContext.Provider
      value={{ notifications, markAllAsRead, unreadCount }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

// hanya hook, bukan React component
export const useNotifications = () => useContext(NotificationsContext);
