import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddCourse }) => {

      const [courses, setCourses] = useState([]);

      useEffect(() => {
            fetch('/data.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, []);

      return (
            <div className="w-3/4 grid grid-cols-3 gap-6">
                  {
                        courses.map((course, index) => <Course
                              key={course.id + index}
                              course={course}
                              handleAddCourse={handleAddCourse}
                        ></Course>)
                  }
            </div>
      );
};

export default Courses;