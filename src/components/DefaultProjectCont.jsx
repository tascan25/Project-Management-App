import React from 'react'
import logo from '../assets/no-projects.png'
function DefaultProjectCont({handelProject}) {
    return (
        <div className='flex flex-col gap-20 p-4 w-full items-center  h-full fixed overflow-y-scroll'>

            <div className='flex flex-col items-center w-fit p-2 mt-20 ml-52 gap-4'>
                <img src={logo} alt="Notes-logo.png" className='w-20' />
                <span className='text-slate-400 font-medium text-xl'>Select a project to get started or create a new one</span>
            </div>
            <button className='bg-gray-500 text-white font-medium py-2 px-3 rounded-md opacity-50 hover:opacity-90 w-fit ml-52'
            onClick={handelProject}>create project</button>
        </div>
    )
}

export default DefaultProjectCont
