
const Cart = ({ selectedCourse, totalPrice, totalCredit, remainingCredits }) => {
      console.log(selectedCourse);
      return (
            <div className="lg:w-1/4 mt-4 lg:mt-0 bg-[#FFF] rounded-xl h-fit p-6">
                  <h1 className="text-[#2F80ED] text-lg font-bold pb-4 border-b-2 border-gray-300 mb-4">Credit Hour Remaining {remainingCredits} hr</h1>

                  <h1 className="text-[#1C1B1B] text-xl font-bold ">Course Name</h1>
                  <div className="pb-6 border-b-2 border-gray-300 space-y-2 mt-4">
                        {
                              selectedCourse.map((course, idx) => <li className="list-decimal text-[#1c1b1b99] font-normal" key={course.id + idx}>{course.name}</li>)
                        }
                  </div>
                  <h1 className="text-[#1c1b1bcc] font-medium py-4 border-b-2 border-gray-300 mb-4">Total Credit Hour : {totalCredit}</h1>

                  <h1 className="text-[#1c1b1bcc] font-medium">Total Price : {totalPrice} USD</h1>
            </div>
      );
};

export default Cart;