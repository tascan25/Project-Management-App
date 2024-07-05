import React from 'react'
import Modal from './Modal'
import { useRef } from 'react'
function TaskInput({ onAddTask, projectID }) {
  const task = useRef()
  const dialog = useRef()
  function handelAddTask() {
    if (task.current.value !== '') {
      const newTask = {
        id: Date.now(),
        projectID: projectID,
        text: task.current.value
      }
      onAddTask(newTask)
      task.current.value = ''
    }
    else {
      dialog.current.open()
    }
  }
  return (
    <>
      <Modal buttonCaption={'Okay'} ref={dialog}>
        <div className='flex w-full justify-center items-center'>
          <span className='text-4xl'>⚠️</span>
        </div>
        <h2 className='text-stone-700 my-4  text-lg font-mono'>oops!, Enter the required value</h2>
      </Modal>
      <div className='flex gap-2 justify-start items-center w-full transition-all ease-in-out duration-700'>
        <input ref={task} type="text" className='outline-none rounded-md bg-slate-200 text-slate-600 font-fontPoppins font-medium w-[60%] py-2 px-3 mb-2 max-[780px]:w-[80%] max-[450px]:w-[80%] max-[450px]:py-[7px] max-[450px]:px-2  max-[450px]:text-sm max-[400px]:py-[4px]' />
        <button className='bg-slate-600 hover:bg-slate-500 text-slate-100 w-fit py-1 px-2 rounded-md font-fontPoppins font-normal text-sm transition ease-linear duration-300 max-[400px]:text-xs'
          onClick={handelAddTask}>Save</button>
      </div>
    </>
  )
}

export default TaskInput
