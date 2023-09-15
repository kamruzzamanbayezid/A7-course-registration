
const Course = ({ course }) => {

      const { img, name, details, credits, price, id } = course;
      return (
            <div className="card card-compact bg-[#FFF] ">
                  <figure className="mt-4"><img src={img} alt="Shoes" /></figure>
                  <div className="card-body ml-1">
                        <h1 className="text-[#1C1B1B] text-lg font-semibold mb-1">{name}</h1>
                        <p className="text-[#1c1b1b99] text-sm font-normal mb-4">{details}</p>
                        <div className="flex justify-between items-center mb-6">
                              <div className="flex items-center gap-3">
                                    <img src="../../assets/icons/dollar-sign 1.svg" alt="" />
                                    <p className="text-base text-[#1c1b1b99] font-medium">Price : {price}</p>
                              </div>
                              <div className="flex items-center gap-3        ">
                                    <figure>
                                          <img src="../../assets/icons/dollar-sign 1.svg" alt="" />
                                    </figure>
                                    <p className="text-base text-[#1c1b1b99] font-medium">Credit : {credits}hr</p>
                              </div>
                        </div>
                        <div className="card-actions">
                              <button className="btn btn-primary w-full">Buy Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default Course;