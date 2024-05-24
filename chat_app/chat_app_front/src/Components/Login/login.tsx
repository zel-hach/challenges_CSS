import React from 'react'

export default function Login(props:any) {
    const go_to_Register = () => {
        props.setLogin(false)
    }
    return (
        <div className='flex flex-col items-center m-12 gap-7 w-full'>
            <div className='w-full flex flex-col'>
                <label className='invisible'>Username</label>
                <input type='text' placeholder='Username' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
            </div>
            <div className='w-full flex flex-col'>
                <label className='invisible'>Password</label>
                <input type='password' placeholder='Password' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
            </div>
            <div className='w-full flex justify-center'>
                <button className='p-3 bg-zinc-950 rounded w-full' >Log in</button>
            </div>
            <div className='w-full'>
                <p>create new account <span className='text-slate-950 font-bold cursor-pointer' onClick={go_to_Register}>sign up</span></p>
            </div>
        </div>
    )
}
