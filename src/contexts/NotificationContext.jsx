import React, { createContext, useContext, useState } from "react";
import { notificationsData } from "../assets/data/notificationsData";

const NotificationsContext = createContext();

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(notificationsData);

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
