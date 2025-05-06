import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center text-white'>
      User: {userid}
    </div>
  )
}

export default User
