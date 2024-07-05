import React from 'react'
import TaskInput from './TaskInput'
import { useState } from 'react'
function TaskToogle({ onAddTask, projectID }) {
  const [TaskCont, setTaskCont] = useState(false)
  const handelToogleTrue = () => {
    setTaskCont((task) => !task)
  }
  return (
    <div className='flex flex-col justify-start gap-4 w-full'>
      <button className='bg-slate-600 hover:bg-slate-500 text-slate-100 w-fit py-1 px-2 mt-2 mb-2 rounded-md font-fontPoppins font-normal text-xs transition ease-linear duration-300 max-[400px]:text-[12px]'
        onClick={handelToogleTrue}>{!TaskCont ? 'Add Task' : 'Cancel'}</button>
      {TaskCont && <TaskInput projectID={projectID} onAddTask={onAddTask} />}
    </div>
  )
}

export default TaskToogle
