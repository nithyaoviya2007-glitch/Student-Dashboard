import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sidebar">
      <h2>🎓 Student Dashboard</h2>

      <Link to="/">🏠 Dashboard</Link>
      <Link to="/students">👨‍🎓 Student List</Link>
      <Link to="/profile">👤 Student Profile</Link>
      <Link to="/courses">📚 Courses</Link>
      <Link to="/attendance">📅 Attendance</Link>
      <Link to="/notifications">🔔 Notifications</Link>
    </div>
  );
}

export default Navbar;