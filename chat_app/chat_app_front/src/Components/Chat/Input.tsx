import React from 'react'
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";


export default function Input() {
  return (
    <div className='bg-gray-200 px-1 py-2 w-full relative'>
      <input type='text' placeholder='text...' className='w-full h-full border rounded-lg px-4 py-5 focus:outline-none focus:border-blue-400'></input>
      <div className='absolute flex gap-3 top-5 right-3'>
        <BsEmojiHeartEyesFill fill='#FEB941' size={30}/>
        <MdKeyboardVoice fill='black' size={30}></MdKeyboardVoice>
        <RiSendPlane2Fill fill='black' size={30}></RiSendPlane2Fill>
      </div>
    </div>
  )
}
