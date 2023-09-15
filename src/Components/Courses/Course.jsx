import { useEffect, useState } from "react";

const Course = () => {

      const [courses, setCourses] = useState([]);

      useEffect(() => {
            fetch('../../../public/data.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])

      return (
            <div className="w-3/4 grid grid-cols-3 gap-6">
                  
            </div>
      );
};

export default Course;