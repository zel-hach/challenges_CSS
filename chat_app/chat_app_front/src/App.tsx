
import './App.css'

function App() {


  return (
    <div className='flex justify-center items-center gap-20 p-20 rounded-md shadow-2xl bg-gradient-to-r from-gray-900 to-transparent'>
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
      <div className='flex flex-col items-center gap-7 w-full'>
        <div className='flex flex-col items-start'>
          <label className='invisible'>Username</label>
          <input type='text' placeholder='Username' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
        </div>
        <div className='flex flex-col items-start'>
            <label className='invisible'>Password</label>
            <input type='password' placeholder='Password' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
        </div>
        <div className='flex justify-center'>
          <button className='p-3 bg-zinc-950 rounded' >Log in</button>
        </div>
        <div>
          <p>create account if you don't have <span>sign up</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
