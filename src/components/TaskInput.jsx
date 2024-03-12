import React from 'react'
import Modal from './Modal'
import { useRef } from 'react'
function TaskInput({onAddTask}) {
    const task = useRef()
    const dialog = useRef()
    function handelAddTask(){
        if(task.current.value!==''){
            onAddTask(task.current.value)
            task.current.value=''
        }
        else{
            dialog.current.open()
        }
    }
  return (
    <>
    <Modal buttonCaption={'Okay'} ref={dialog}>
        <h2 className='text-stone-700 my-4  text-lg font-mono'>oops!, Enter the required value</h2>
    </Modal>
    <div className='flex gap-2 justify-start items-center w-full'>
      <input ref={task} type="text" className='text-slate-600 bg-slate-100 w-[20vw] outline-none p-2' />
      <button className='bg-stone-500 text-slate-100 w-fit py-1 px-2 rounded-md font-normal'
      onClick={handelAddTask}>Add</button>
    </div>
    </>
  )
}

export default TaskInput
