import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
      const [courses, setCourses] = useState([]);

      useEffect(() => {
            fetch('../../../public/data.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])
      console.log(courses);
      return (
            <div>

            </div>
      );
};

export default Courses;