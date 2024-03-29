// import { FaBeer } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';


const Course = ({ course, handleAddCourse }) => {

      const { img, name, details, credits, price } = course;
      return (
            <div className="card card-compact bg-[#FFF] ">
                  <figure className="mt-4 px-[14px]"><img className='w-full' src={img} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h1 className="text-[#1C1B1B] text-lg font-semibold mb-1">{name}</h1>
                        <p className="text-[#1c1b1b99] text-sm font-normal mb-3">{details}</p>
                        <div className="flex justify-between">
                              <div className="flex items-center gap-1">
                                    <FiDollarSign className='text-2xl text-[#1C1B1B]'></FiDollarSign>
                                    <p className="text-base text-[#1c1b1b99] font-medium">Price : {price}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                    <BsBook className='text-2xl text-[#1C1B1B]'></BsBook>
                                    <p className="text-base text-[#1c1b1b99] font-medium">Credit : {credits}hr</p>
                              </div>
                        </div>
                        <div className="card-actions mt-5">
                              <button onClick={() => handleAddCourse(course)} className="btn btn-primary w-full text-[#FFF] text-lg font-semibold bg-[#2F80ED] border-[#2F80ED;]">Select</button>
                        </div>
                  </div>
            </div>
      );
};

export default Course;