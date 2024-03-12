import TaskCont from "./TaskCont"
import TaskToogle from "./TaskToogle"
import { useState,useEffect } from "react"
function SelectedProject({ project, handelClose, handelDelete,handelAddTask,handelDeleteTask,tasks}) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: "long",
        day: "numeric"
    })
    const formattedStartDate = new Date(project.startDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: "long",
        day: "numeric"
    })
    const formattedEndDate = new Date(project.endDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: "long",
        day: "numeric"
    })


    return (
        <div className="flex flex-col gap-10 p-4 w-[50vw] justify-start max-h-[80vh] fixed ml-[35em] mt-10  pb-10 overflow-y-scroll">
            <div className="flex justify-between w-full items-center">
                <h1 className="text-2xl text-slate-600 font-bold">{project.title}</h1>
                <button className='bg-slate-900 text-white font-medium py-1 px-2 w-fit rounded-lg'
                    onClick={() => handelDelete(project.id)}>Delete</button>
            </div>
            <div className="flex justify-between w-full items-center">
                <span className="text-slate-500">Start Date: <strong className="text-neutral-900">{formattedStartDate}</strong></span>
                <span className="text-slate-500">End Date: <strong className="text-neutral-900">{formattedEndDate}</strong></span>
            </div>
            <div className="flex flex-col justify-start gap-5">
                <span className="text-slate-500">Due Date: <strong className="text-neutral-900">{formattedDate}</strong></span>
                <p className="text-slate-500 text-lg text-left font-normal whitespace-pre-wrap">{project.description}</p>
            </div>
            {project.gitHub !== '' && <div>
                <span className="text-slate-700 font-normal text-base">
                    GitHub: <strong className="text-neutral-600">
                        <a href={project.gitHub} target="_blank">
                            {project.gitHub}
                        </a>
                    </strong>
                </span>
            </div>}
            {
                project.refrences !==''?<div className="flex flex-col justify-start gap-2">
                       <span className="text-slate-700 font-medium">Refrences</span> 
                       <p className="text-slate-500 text-lg text-left font-normal whitespace-pre-wrap">
                        {project.refrences}
                       </p>
                </div>: undefined
            }
            {/* {
                project.image && project.image instanceof Blob && <div className=" flex justify-center items-center w-full">
                    <img src={URL.createObjectURL(project.image)} alt="Selected Image" className="w-96 object-contain rounded-lg"/>
                    
                </div>
            } */}
            <hr  className="w-full bg-slate-600 rounded-lg"/>
            <div className="flex flex-col gap-2 w-full justify-start">
                <span className="text-stone-700 text-2xl font-medium">Task</span>
                <span className="text-stone-700">Enter Task that you need to manage related to the project.</span>
                <TaskToogle onAddTask={handelAddTask}/>

                <div className="flex flex-col w-full justify-start gap-4 p-2 max-h-[40vh] overflow-y-scroll">
                    {tasks.map((task)=><TaskCont  key={task.projectID} task={task.text} onDelete={()=>handelDeleteTask(task.id)}/>)}
                </div>
            </div>
            <div>
                <button
                    className="bg-slate-900 text-white font-medium py-1 px-2 w-fit rounded-lg"
                    onClick={handelClose}>close</button>
            </div>
        </div>
    )
}

export default SelectedProject