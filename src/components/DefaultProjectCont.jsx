import React from 'react'
import logo from '../assets/no-projects.png'
function DefaultProjectCont({handelProject}) {
    return (
        <div className='flex flex-col gap-10 p-4 w-full items-center  h-full fixed overflow-y-scroll transition-all ease-in duration-500'>
            
            <div className='flex flex-col items-center w-fit p-2 mt-20 ml-52 gap-4 max-[450px]:w-full max-[450px]:ml-0 max-[400px]:w-full max-[400px]:ml-0 '>
                <img src={logo} alt="Notes-logo.png" className='w-28 animate-bounce max-[450px]:w-20 max-[400px]:w-20 ' />
                <span className='text-slate-500 font-medium font-fontPoppins  text-xl max-[780px]:text-lg max-[780px]:text-center max-[780px]:ml-16 max-[450px]:ml-0 max-[450px]:text-lg max-[450px]:text-center max-[400px]:text-lg max-[400px]:text-center '>Select a project to get started or create a new one</span>
            </div>
            <button className='bg-gray-700 text-white font-fontPoppins font-medium py-2 px-3 rounded-md opacity-50 hover:opacity-90 transition duration-200 ease-linear w-fit ml-52 max-[780px]:ml-56 max-[450px]:ml-0
            max-[400px]:ml-0 '
            onClick={handelProject}>create project</button>
        </div>
    )
}

export default DefaultProjectCont
