import { useEffect, useState } from "react";
import api from "../services/api";
import profileData from "../data/profile.json";

function StudentProfile() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/profile");
      setStudents(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setStudents(profileData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="loading">Loading Profile...</h2>;
  }

  const student = students.find(
    (s) => s.name.toLowerCase() === search.toLowerCase()
  );

  return (
    <div className="container">
      <h1>👤 Student Profile</h1>

     
  <div className="search-container">
  <input
    type="text"
    placeholder="Search Student by Name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-box"
  />
</div>
      {search === "" ? (
        <p className="search-msg">Type a student name to view the profile.</p>
      ) : student ? (
        <div className="profile-box">
          <div className="profile-item">
            <label>Name</label>
            <h3>{student.name}</h3>
          </div>

          <div className="profile-item">
            <label>Age</label>
            <h3>{student.age}</h3>
          </div>

          <div className="profile-item">
            <label>Department</label>
            <h3>{student.department}</h3>
          </div>

          <div className="profile-item">
            <label>Year</label>
            <h3>{student.year}</h3>
          </div>

          <div className="profile-item">
            <label>Email</label>
            <h3>{student.email}</h3>
          </div>
        </div>
      ) : (
        <h2 style={{ color: "red", marginTop: "20px" }}>
          Student not found
        </h2>
      )}
    </div>
  );
}

export default StudentProfile;