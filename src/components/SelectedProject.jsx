import TaskCont from "./TaskCont"
import TaskToogle from "./TaskToogle"

function SelectedProject({ project, handelClose, handelDelete, handelAddTask, handelDeleteTask, tasks, seletedProjectID }) {

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
        <div className="bg-slate-50 rounded-lg  scroll-smooth flex flex-col gap-10 p-6 w-[50vw] justify-start max-h-[80vh] fixed ml-[35em] mt-10 pb-5 overflow-y-scroll max-[1280px]:ml-[30em] max-[1024px]:ml-[24em] max-[780px]:w-[53vw] max-[780px]:ml-[20em] max-[450px]:ml-0 max-[450px]:w-full max-[400px]:ml-0 max-[400px]:w-full max-[450px]:gap-8 ">
            <div className="flex justify-between w-full items-center">
                <h1 className="text-xl text-slate-600 font-fontPoppins font-bold max-[780px]:text-lg max-[450px]:text-lg max-[400px]:text-base">{project.title}</h1>
                <button className='bg-slate-900 hover:bg-slate-700 transition ease-linear duration-300 text-white font-fontPoppins font-medium py-1 px-2 w-fit rounded-lg text-sm'
                    onClick={() => handelDelete(project.id)}>Delete</button>
            </div>
            <div className="flex justify-between w-full items-center max-[780px]:flex-col max-[780px]:justify-start max-[780px]:gap-4 max-[780px]:items-start max-[450px]:flex-col max-[450px]:justify-start max-[450px]:gap-4 max-[450px]:items-start">
                <span className="text-slate-500 font-fontPoppins max-[450px]:text-sm max-[400px]:text-xs">Start Date: <strong className="text-neutral-900
                max-[450px]:text-sm max-[400px]:text-xs">{formattedStartDate}</strong></span>
                <span className="text-slate-500 font-fontPoppins max-[450px]:text-sm max-[400px]:text-xs">End Date: <strong className="text-neutral-900
                max-[450px]:text-sm max-[400px]:text-xs">{formattedEndDate}</strong></span>
            </div>
            <div className="flex flex-col justify-start gap-5">
                <span className="text-slate-500 font-fontPoppins max-[450px]:text-sm max-[400px]:text-xs">Due Date: <strong className="text-neutral-900
                max-[450px]:text-sm max-[400px]:text-xs">{formattedDate}</strong></span>
                <p className="text-slate-900 text-lg text-left font-normal whitespace-pre-wrap font-fontPoppins
                max-[450px]:text-base max-[450px]:text-slate-950 max-[400px]:text-sm">{project.description}</p>
            </div>
            {project.gitHub !== '' && <div>
                <span className="text-slate-700 font-normal text-base max-[450px]:text-sm max-[400px]:text-xs">
                    GitHub: <strong className="text-neutral-600 font-fontPoppins">
                        <a href={project.gitHub} target="_blank">
                            {project.gitHub}
                        </a>
                    </strong>
                </span>
            </div>}
            {
                project.refrences !== '' ? <div className="flex flex-col justify-start gap-2">
                    <span className="text-slate-600 text-lg font-medium font-fontPoppins max-[450px]:text-base max-[400px]:text-sm">Refrences</span>
                    <p className="text-slate-800 text-lg text-left font-normal whitespace-pre-wrap font-fontPoppins 
                    max-[450px]:text-sm max-[450px]:text-slate-900 max-[400px]:text-xs">
                        {project.refrences}
                    </p>
                </div> : undefined
            }

            <hr className="w-full bg-slate-600 rounded-lg" />
            <div className="flex flex-col gap-2 w-full justify-start">
                <span className="text-slate-700 text-xl font-fontPoppins font-medium max-[450px]:text-lg max-[400px]:text-sm">Task</span>
                <span className="text-slate-500 font-fontPoppins max-[780px]:text-sm max-[450px]:text-sm max-[400px]:text-xs">Enter Task that you need to manage related to the project.</span>
                <TaskToogle projectID={seletedProjectID} onAddTask={handelAddTask} />

                <div className="flex flex-col w-full justify-start gap-4 p-2 max-h-[40vh] overflow-y-scroll">
                    {tasks.filter((task) => task.projectID === project.id).map((task) => <TaskCont key={task.projectID} task={task.text} onDelete={() => handelDeleteTask(task.id)} />)}
                </div>
            </div>
            <div>
                <button
                    className="bg-slate-900 hover:bg-slate-700 transition ease-linear duration-300 text-white font-fontPoppins font-medium py-1 px-2 w-fit rounded-lg text-sm"
                    onClick={handelClose}>close</button>
            </div>
        </div>
    )
}

export default SelectedProject