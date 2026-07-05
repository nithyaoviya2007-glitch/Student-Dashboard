import { useEffect, useState } from "react";
import api from "../services/api";
import dashboardData from "../data/dashboard.json";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard");
      setData(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setData(dashboardData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="loading">Loading Dashboard...</h2>;
  }

  const colors = ["blue", "green", "orange", "red"];

 return (
  <div className="container">

    {/* LOADING SAFE BLOCK */}
    {loading ? (
      <div className="loading">Loading Dashboard...</div>
    ) : (
      <>
        {/* DASHBOARD CARDS (your existing cards) */}
        <div className="card-container">
          <div className="card blue">
            <h2>Students</h2>
            <p>10</p>
          </div>

          <div className="card green">
            <h2>Courses</h2>
            <p>8</p>
          </div>

          <div className="card orange">
            <h2>Attendance</h2>
            <p>85%</p>
          </div>

          <div className="card red">
            <h2>Notifications</h2>
            <p>4</p>
          </div>
        </div>

        {/* ✅ FREE SPACE CONTENT (THIS WILL NOT DISAPPEAR NOW) */}
        <div className="activity-box">
          <h2>Recent Activity</h2>

          <div className="activity-item">✔ New course Artificial Intelligence added</div>
          <div className="activity-item">✔ Attendance updated</div>
          <div className="activity-item">✔ New notice published</div>
        </div>

      </>
    )}

  </div>
);
}

export default Dashboard;