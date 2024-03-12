import React from 'react'
import { forwardRef } from 'react'
const LabelTextarea = forwardRef(function LabelTextarea({label,placeholder},ref) {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label >{label}</label>
      <textarea ref={ref} cols="30" rows="10" placeholder={placeholder}
      className='resize-none outline-none bg-slate-100 text-slate-500 font-medium w-full p-2'></textarea>
    </div>
  )
})

export default LabelTextarea
