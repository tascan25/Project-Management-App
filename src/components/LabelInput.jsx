import React from 'react'
import { forwardRef } from 'react'
 const LabelInput = forwardRef(function LabelInput({label,type,placeholder},dateRef) {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label className='text-slate-700 font-fontPoppins font-medium'>{label}</label>
        <input ref={dateRef} type={type} placeholder={placeholder}
        className='outline-none rounded-md bg-slate-200 text-slate-600 font-fontPoppins font-medium w-full p-3' />
      
    </div>
  )
})

export default LabelInput
