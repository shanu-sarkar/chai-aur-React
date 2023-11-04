import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <div className='text-xl text-center p-2 font-bold bg-orange-600 mx-40 text-white'> User: {userid} </div>
  )
}

export default User;
