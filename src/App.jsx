import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredits, setRemainingCredit] = useState(0);

  const handleAddCourse = (course) => {
    const isSelected = selectedCourse.find(exist => exist.id === course.id)

    let total = course.price;
    let credits = course.credits;
    if (isSelected) {
      return toast(`The course is already selected.
      You can try our other courses if you want.
      Thanks`)
    }
    else {
      selectedCourse.forEach(course =>
        total = total + course.price
      )

      selectedCourse.forEach(course =>
        credits = credits + course.credits
      )
      if (credits > 20) {
        return toast(`
        Your credit limit has been exceeded.
        You cannot use more than 20 credits.`)
      }
      else {
        const remaining = 20 - credits;
        if (remaining < 0) {
          return toast('You have no more credits left to use!')
        }
        else {
          setRemainingCredit(remaining)
          setTotalCredit(credits)

          setTotalPrice(total)
          setSelectedCourse([...selectedCourse, course])
        }
      }
    }
  };


  return (
    <div className='main-container'>
      <Header></Header>
      <div className='flex gap-6'>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Cart
          selectedCourse={selectedCourse}
          totalPrice={totalPrice}
          totalCredit={totalCredit}
          remainingCredits={remainingCredits}
        ></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
