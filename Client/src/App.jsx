import React from 'react'
import Navbar from './Components/Navbar'
import Codeforinterview from './Components/Codeforinterview'
import AllUser from './Components/AllUser'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import { BrowserRouter ,Route,Router,Routes} from 'react-router-dom'


const App = () => {
  return (
 <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/'element={<Codeforinterview/>} />
     <Route path='/all' element={<AllUser/>} />
     <Route path='/add'element={<AddUser/>} />
     <Route path='/edit/:id'element={<EditUser/>} />
    </Routes>
  </BrowserRouter>
 </>
    

  )
}

export default App