import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

      const [courses, setCourses] = useState([]);

      useEffect(() => {
            fetch('../../../public/data.json')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])

      return (
            <div className="w-3/4 grid grid-cols-3 gap-6">
                  {
                        courses.map((course, idx) => <Course
                              key={course.id + idx}
                              course={course}
                        ></Course>)
                  }
            </div>
      );
};

export default Courses;






















// import { useEffect, useState } from "react";
// import Course from "../Course/Course";

// const Course = () => {

//       const [courses, setCourses] = useState([]);

//       useEffect(() => {
//             fetch('../../../public/data.json')
//                   .then(res => res.json())
//                   .then(data => setCourses(data))
//       }, [])

//       return (
//             <div className="w-3/4 grid grid-cols-3 gap-6">
//                   {
//                         courses.map((course, idx) => <Course
//                               key={course.id + idx}
//                               course={course}
//                         ></Course>)
//                   }
//             </div>
//       );
// };

// export default Course;