import React from 'react'
import { useRef} from 'react'
import LabelInput from './LabelInput'
import LabelTextarea from './LabelTetxtarea'
import Modal from './Modal'
// right-[32em] bottom-[20.2em]
function InputGroupProject({ handelCancel, onAddProject}) {
    const dialog = useRef()
    const github = useRef()
    const startDate = useRef()
    const endDate = useRef()
    const dueDate = useRef()
    const title = useRef()
    const description = useRef()
    const Refrences = useRef()

function handelAddProject() {
        if (title.current.value.trim() !== '' && description.current.value.trim() !== '' && dueDate.current.value.trim() !== ''
        && startDate.current.value.trim() !=='' && endDate.current.value.trim()!=='') {
            const newProject = {
                id: Date.now(),
                title: title.current.value,
                description: description.current.value,
                dueDate: dueDate.current.value,
                startDate:startDate.current.value,
                endDate:endDate.current.value,
                gitHub:github.current.value,
                refrences:Refrences.current.value,
            }
            
            onAddProject(newProject)
        }
        else if (title.current.value.trim() === '' || description.current.value.trim() === '' || dueDate.current.value.trim() === ''
        || startDate.current.value==='' || endDate.current.value==='') {
            dialog.current.open()
            return
        }
    }
    return (
        <>
            <Modal ref={dialog} buttonCaption={'Okay'}>
                <div className='flex w-full justify-center items-center'>
                <span className='text-4xl'>⚠️</span>
                </div>
                
                <h2 className='text-stone-700 my-4  text-lg font-mono'>Invalid Input</h2>
                <p className='text-stone-500 mb-4 font-mono'>Looks like you miss a value..</p>
                <p className='text-stone-500 mb-4 font-mono'>Please check agian your value, and then proceed with with add</p>
            </Modal>
            <div className='scroll-smooth flex flex-col gap-20 p-4 w-full items-center  max-h-[85vh] mb-10 fixed overflow-y-scroll transition-all duration-700 ease-in-out'>
                <div className='flex flex-col items-center rounded-lg bg-slate-50 w-[45vw]  p-4 gap-4 ml-[20em] max-[780px]:ml-[19em] max-[780px]:w-[47vw] max-[450px]:w-full max-[450px]:ml-0 max-[400px]:w-full max-[400px]:ml-0 '>
                    
                    <span className='text-slate-900 font-fontPoppins mb-5 font-medium text-xl text-center max-[450px]:text-lg max-[400px]:text-lg'>Enter Details For The Project</span>
                    
                        <LabelInput label={'Title'} type={'text'} placeholder={"Enter Title"} ref={title}/>    

                        <LabelTextarea label={'Description'} placeholder={'Enter Description'} ref={description}/>
                
                        <LabelInput label={'GitHub Repositry Link'} type={'url'}  placeholder={'Github link'} ref={github}/>
                        <LabelInput label={'Start Date'} type={'date'} placeholder={''}  ref={startDate}/>
                        <LabelInput label={'End Date'} type={'date'} placeholder={''}  ref={endDate}/>
                        <LabelInput label={'Due Date'} type={'date'} placeholder={''}  ref={dueDate}/>

                        <LabelTextarea label={'Refrences'} placeholder={'Enter refrences'} ref={Refrences}/>


                        
                    <div className='flex justify-between w-full'>
                        <button className='bg-slate-900 text-white font-fontPoppins font-medium py-1 px-2 w-fit rounded-lg'
                            onClick={handelAddProject}>Save</button>
                        <button className='bg-slate-900 text-white font-fontPoppins font-medium py-1 px-2 w-fit rounded-lg'
                            onClick={handelCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputGroupProject
