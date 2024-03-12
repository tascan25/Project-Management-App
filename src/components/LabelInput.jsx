import React from 'react'
import { forwardRef } from 'react'
 const LabelInput = forwardRef(function LabelInput({label,type,placeholder},dateRef) {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label className='text-slate-700'>{label}</label>
        <input ref={dateRef} type={type} placeholder={placeholder}
        className='outline-none bg-slate-100 text-slate-500 font-medium w-full p-2' />
      
    </div>
  )
})

export default LabelInput
