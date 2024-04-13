import React from 'react'
import { useParams } from 'react-router-dom'        

function User() {
    const {userid} = useParams
  return (
    <div className=' bg-slate-600 text-white text-3xl p-4'>
    <div>User:{userid} </div>
    </div>
  )
}

export default User