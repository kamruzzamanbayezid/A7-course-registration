
const Course = ({ course }) => {

      const { name, img, details, credits, price } = course;

      return (
            <div className="border p-4 bg-[#FFF] rounded-xl">
                  <figure className="flex justify-center mb-4">
                        <img src={img} alt="Course Image" />
                  </figure>
                  <h1 className="text-lg font-semibold mb-3">{name}</h1>
                  <p className="text-sm text-[#1c1b1b99] mb-5">{details}</p>
                  <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                              <i className="fa-solid fa-dollar-sign"></i>
                              <p className="text-[#1c1b1b99] font-medium">Price : {price}</p>
                        </div>
                        <div className="flex justify-betwen items-center gap-3">
                              <i className="fa-solid fa-book-open"></i>
                              <p className="text-[#1c1b1b99] font-medium">Credit: {credits}hr</p>
                        </div>
                  </div>

                  
                  <button className="btn btn-primary w-full mt-6">Select</button>
            </div>

      );
};

export default Course;