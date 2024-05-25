import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Chat from '../Chat/Chat';





export default function Home() {
  return (
    <div className='w-full h-3/4 bg-teal-700 flex m-5 rounded-lg'>
        <nav className='w-20 h-full flex flex-col justify-around gap-10 items-center p-5'>
          <span><CgProfile size={40}/></span>
          <span><IoIosChatboxes size={40}/></span>
          <span><IoSettings size={40}/></span>
          <span><FaUserFriends size={40}/></span>
        </nav>
        <Chat></Chat>
    </div>
  )
}
