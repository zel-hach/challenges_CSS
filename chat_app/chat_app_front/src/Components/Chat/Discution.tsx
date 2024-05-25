import React from 'react'
import Head from './head'
import Messages from './messages'
import Input from './Input'

export default function Discution() {
  return (
    <div className='bg-gray-50 text-black h-full flex flex-col flex-1'>
      <Head></Head>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}
