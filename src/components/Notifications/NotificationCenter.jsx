// src/components/Notifications/NotificationCenter.jsx
import React, { useState } from 'react';
import './NotificationCenter.css';  // CSS for styling the notification center

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, { id: Date.now(), message }]);
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notification-center">
      <button onClick={() => addNotification('New job created!')}>Add Job Notification</button>
      <div className="notifications">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <span>{notification.message}</span>
            <button onClick={() => dismissNotification(notification.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;
