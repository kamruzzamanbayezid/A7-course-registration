import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='main-container'>
      <Header></Header>
      <div className='flex gap-6'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default App
