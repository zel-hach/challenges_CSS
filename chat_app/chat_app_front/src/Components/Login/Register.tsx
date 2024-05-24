import React from 'react'

export default function Register(props:any) {
    const go_To_login = () =>{
        props.setLogin(true);
    }
  return (
    <div className='flex flex-col items-center gap-7 w-full m-12'>
    <div className='w-full flex flex-col '>
      <label className='invisible'>Username</label>
      <input type='text' placeholder='Username' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
    </div>
    <div className=' w-full flex flex-col '>
      <label className='invisible'>Email</label>
      <input type='email' placeholder='Email' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
    </div>
    <div className='w-full flex flex-col'>
      <label className='invisible'>Phone</label>
      <input type='phone' placeholder='Phone' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
    </div>
    <div className='w-full flex flex-col'>
        <label className='invisible'>Password</label>
        <input type='password' placeholder='Password' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
    </div>
    <div className='w-full flex justify-center'>
      <button className='w-full p-3 bg-zinc-950 rounded' >Log in</button>
    </div>
    <div>
      <p>Have an account ? <span className='text-slate-950 font-bold cursor-pointer' onClick={go_To_login}>log in</span></p>
    </div>
  </div>
  )
}
