import React from 'react'

function TaskCont({task,onDelete}) {
  return (
    <p className='flex justify-between items-center w-full p-2 mt-2 bg-slate-200 rounded-lg max-[450px]:rounded-md max-[450px]:w-[80vw] max-[400px]:w-[78vw] max-[360px]:w-[77vw]'>
      <span className='text-slate-700 font-fontPoppins font-normal text-base max-[450px]:text-slate-600 max-[450px]:text-sm max-[450px]:font-semibold max-[400px]-text-[12px]'>{task}</span>
      <button className='bg-slate-600 hover:bg-slate-500 text-slate-100 w-8 h-8 py-1 px-2 rounded-full font-fontPoppins font-normal text-sm transition ease-linear duration-300 max-[450px]:w-6 max-[450px]:h-6 max-[450px]:text-xs max-[400px]:text-[12px]'
      onClick={onDelete}>X</button>
    </p>
  )
}

export default TaskCont
