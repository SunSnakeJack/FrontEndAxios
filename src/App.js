import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/Signin'
// import Home from './components/Home'
import Signup from './components/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RoomDetails from './components/RoomDetails'
import "./App.css";

import Login from './components/login.component';
import Profile from './components/profile.component';
import Home from './components/home.component';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/SignIn' element={<SignIn />}></Route>
//         <Route path='/Booknow' element={<Home />}></Route>
//         {/* <Route path='/Signup' element={<Signup />}></Route> */}
//         <Route path='/room-details' element={<RoomDetails />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;