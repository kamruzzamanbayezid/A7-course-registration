
const Course = ({ course }) => {

      const { img, name, details, credits, price, id } = course;
      return (
            <div className="card card-compact bg-[#FFF] ">
                  <figure className="mt-4"><img src={img} alt="Shoes" /></figure>
                  <div className="card-body ml-1">
                        <h1 className="text-[#1C1B1B] text-lg font-semibold mb-1">{name}</h1>
                        <p className="text-[#1c1b1b99] text-sm font-normal mb-3">{details}</p>
                        <div className="flex justify-between">
                              <div className="flex items-center gap-2">
                                    <i className="fa-solid text-2xl fa-dollar-sign"></i>
                                    <p className="text-base text-[#1c1b1b99] font-medium">Price : {price}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                    <i className="fa-solid text-2xl fa-book-open"></i>
                                    <p className="text-base text-[#1c1b1b99] font-medium">Credit : {credits}hr</p>
                              </div>
                        </div>
                        <div className="card-actions mt-5">
                              <button className="btn btn-primary w-full text-[#FFF] text-lg font-semibold bg-[#2F80ED] border-[#2F80ED;]">Select</button>
                        </div>
                  </div>
            </div>
      );
};

export default Course;