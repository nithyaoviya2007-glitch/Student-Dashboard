import { useEffect, useState } from "react";
import api from "../services/api";
import notificationData from "../data/notification.json";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get("/notifications");
      setNotifications(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setNotifications(notificationData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2 className="loading">Loading Notifications...</h2>;

  return (
    <div className="container">
      <h1>🔔 Notifications</h1>

      {notifications.map((item) => (
        <div className="notice" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;