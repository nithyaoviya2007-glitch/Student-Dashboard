import { useEffect, useState } from "react";
import api from "../services/api";
import attendanceData from "../data/attendance.json";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await api.get("/attendance");
      setAttendance(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setAttendance(attendanceData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2 className="loading">Loading Attendance...</h2>;

  return (
    <div className="container">
      <h1>📅 Attendance</h1>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.attendance}%</td>

              <td>
                {student.attendance >= 90 ? (
                  <span className="badge excellent">Excellent</span>
                ) : student.attendance >= 75 ? (
                  <span className="badge good">Good</span>
                ) : (
                  <span className="badge poor">Poor</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;