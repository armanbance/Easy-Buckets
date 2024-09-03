import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'


import loginService from './services/login'
import backgroundImage from './assets/background.jpg'

import './index.css'

function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInSpartan');
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen relative" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10">
          <nav className='bg-gray-500 bg-opacity-5'>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className='flex-1'>
                {user ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="text-gray-300 hover:text-blue-700 text-xl px-3 font-bold" to="/login">
                      Login
                    </Link>
                    <Link className="text-gray-300 hover:text-blue-700 text-xl px-3 font-bold" to="/createAccount">
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            
              <div className='flex-1 text-center'>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/howCrowded">How Crowded?</Link>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/fitnessPlan">Fitness Plan</Link>
              </div>
              <div className='flex-1 text-right'>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/about">About</Link>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/">Home</Link>
              </div>
              
            </div>
          </nav>
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login setUser={setUser}/>} />
              <Route path="/createAccount" element={<CreateAccount />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
