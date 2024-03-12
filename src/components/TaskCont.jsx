import React from 'react'

function TaskCont({task,onDelete}) {
  return (
    <p className='flex justify-between  items-center w-full p-2 bg-stone-900 rounded-lg'>
      <span className='text-stone-200 font-normal text-lg'>{task}</span>
      <button className='bg-stone-500 text-slate-100 w-fit h-fit py-1 px-2 rounded-md font-normal'
      onClick={onDelete}>Delete</button>
    </p>
  )
}

export default TaskCont
