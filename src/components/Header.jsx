import React from 'react'

function Header({ handelHideYes }) {
  return (
    <header className='flex justify-center items-cener p-4 w-full relative max-[450px]:p-1 max-[400px]:p-1  '>
      <button className='w-10 h-10 text-center rounded-full p-1 bg-slate-100 text-lg text-gray-900 font-bold absolute top-0 left-0 z-30 hidden max-[450px]:inline  max-[400px]:inline '
        onClick={handelHideYes}>≡</button>
      <h1 className="mb-2 text-center text-4xl font-fontPoppins font-medium max-[450px]:text-xl max-[450px]:mb-3 max-[400px]:text-xl max-[400px]:mb-3">Welcome</h1>
    </header>
  )
}

export default Header
