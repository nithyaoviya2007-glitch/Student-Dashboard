import { useEffect, useState } from "react";
import api from "../services/api";
import coursesData from "../data/courses.json";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setCourses(coursesData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2 className="loading">Loading Courses...</h2>;

  return (
    <div className="container">
      <h1>📚 Courses</h1>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h2>{course.course}</h2>

            <p>
              <strong>Faculty:</strong><br />
              {course.faculty}
            </p>

            <p>
              <strong>Credits:</strong> {course.credits}
            </p>

            <button className="course-btn">
              Active
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;