import React, { useState } from 'react'
import Login from './Components/Login/login'
import Register from './Components/Login/Register';

export default function LondingPage() {
    const [login, setLogin] = useState(false);

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-20 p-20 rounded-md shadow-2xl bg-gradient-to-r from-gray-900 to-transparent'>
    <div className="cup_coffe">
          <div className='container1'>
              <div className='plate'></div>
              <div className='cup'>
                  <div className='vapour'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <div className='top'>
                      <div className='circle'>
                          <div className='tea'>
                          </div>
                      </div>
                  </div>
                  <div className='handle'></div>
              </div>
          </div>
      </div>
      {
        login?
        <Login setLogin={setLogin}></Login>:
        <Register setLogin={setLogin}></Register>
      }
  </div>
  )
}
