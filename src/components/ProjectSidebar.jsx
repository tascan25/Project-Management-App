function ProjectSideBar({ onAddProject,projects,onSelectProject}) {
    return (
        <>
            <div
                className="bg-black mt-15 rounded-tl-sm rounded-tr-2xl rounded-br-xl w-1/3 h-screen flex flex-col p-2 items-center gap-5 fixed z-10">
                <h2 className="text-white font-semibold text-2xl">Your Projects</h2>
                <button className="bg-gray-500 text-white font-medium py-2 px-3 rounded-md opacity-40 hover:opacity-90 cursor-pointer"
                    onClick={onAddProject}> + Add Projects</button>
                <ul className="mt-10 max-h-[60vh] overflow-y-scroll w-full p-2 flex flex-col items-center">
                    {projects.map((projects)=><li key={projects.id}>
                        <button 
                        className="w-full text-left py-1 px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                        onClick={()=>onSelectProject(projects.id)}>{projects.title}</button>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default ProjectSideBar