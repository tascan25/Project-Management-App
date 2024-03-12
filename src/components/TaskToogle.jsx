import React from 'react'
import TaskInput from './TaskInput'
import { useState } from 'react'
function TaskToogle({onAddTask}) {
    const [TaskCont, setTaskCont] = useState(false)
    const handelToogleTrue=()=>{
            setTaskCont((task)=>!task)
    }
  return (
    <div className='flex flex-col justify-start gap-4 w-full'>
      <button className='bg-stone-500 text-slate-100 w-fit py-1 px-2 rounded-md font-normal text-sm'
      onClick={handelToogleTrue}>{!TaskCont?'Add Task':'Cancel'}</button>
      {TaskCont&&<TaskInput onAddTask={onAddTask}/>}
    </div>
  )
}

export default TaskToogle
