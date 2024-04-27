import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed  w-full  h-screen z-[2]'>

    <div className='absolute top-[5%] w-full flex justify-center py-10 text-xl font-semibold text-zinc-400  '> Document</div>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex justify-center items-center w-full h-screen  text-[13vw] leading-none  text-zinc-900'> docs</h1>
 
    </div>
    </>
 )
}

export default Background