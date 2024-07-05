import React from 'react'
import { forwardRef } from 'react'
const LabelTextarea = forwardRef(function LabelTextarea({label,placeholder},ref) {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label className='text-slate-700 font-fontPoppins font-medium'>{label}</label>
      <textarea ref={ref} cols="30" rows="10" placeholder={placeholder}
      className='resize-none rounded-md outline-none bg-slate-200 text-slate-600 font-fontPoppins font-medium w-full p-3'></textarea>
    </div>
  )
})

export default LabelTextarea
