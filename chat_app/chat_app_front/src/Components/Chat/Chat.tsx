import React from 'react'
import Conversation from './Conversation'
import Discution from './Discution'
import Profile from './Profile'

export default function Chat() {
  return (
    <div className='flex-1 flex  bg-gray-700'>
      <Conversation></Conversation>
      <Discution></Discution>
      {/* <Profile></Profile> */}
    </div>
  )
}
