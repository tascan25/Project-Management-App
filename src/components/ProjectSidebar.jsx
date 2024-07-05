function ProjectSideBar({ onAddProject, projects, onSelectProject, handelHideNo, hide }) {
    let classes = "bg-stone-900 mt-15 rounded-tl-sm rounded-tr-3xl rounded-br-xl w-1/3 h-screen flex flex-col p-2 items-center gap-5 fixed z-10 max-[780px]:w-[42vw] max-[780px]:p-4 max-[450px]:absolute max-[450px]:-left-full max-[400px]:-left-full max-[400px]:absolute  transition-all duration-700 ease-in-out"
    if (hide) {
        classes = 'bg-stone-900 mt-15 rounded-tl-sm rounded-tr-3xl rounded-br-xl w-4/5 h-screen flex flex-col p-2 items-center gap-5 fixed z-10 left-0 transition-all duration-700 ease-in-out'
    }
    // bg-[#222831]

    return (
        <>
            <div
                className={classes}>
                <button className='w-7 h-7  text-center rounded-full p-1 bg-slate-200 text-sm text-gray-800 font-medium absolute right-2 hidden max-[450px]:inline max-[400px]:inline' onClick={handelHideNo}>X</button>
                <h2 className="text-white font-semibold text-2xl max-[450px]:text-xl max-[400px]:text-lg">Your Projects</h2>
                <button className="bg-gray-500 text-white font-medium py-2 px-3 rounded-md opacity-60 hover:opacity-90 cursor-pointer 
                max-[400px]:text-sm"
                    onClick={onAddProject}> + Add Projects</button>
                <ul className="mt-10 max-h-[60vh] scroll-smooth overflow-y-scroll w-full p-2 flex flex-col items-center">
                    {projects.map((projects) => <li key={projects.id} className=" w-full flex justify-center items-center transition-all ease-in-out duration-100">
                        <button
                            className="bg-gray-500 w-full text-lg py-2 px-4 rounded-md my-1 text-zinc-50 font-fontPoppins  hover:text-slate-100 hover:font-medium max-[400px]:text-sm"
                            onClick={() => onSelectProject(projects.id)}>{projects.title}</button>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default ProjectSideBar