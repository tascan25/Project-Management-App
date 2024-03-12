import ProjectSideBar from "./components/ProjectSidebar";
import InputGroupProject from "./components/InputGroupProject";
import DefaultProjectCont from "./components/DefaultProjectCont";
import SelectedProject from "./components/SelectedProject";
import { useState, useEffect } from "react";
function App() {
  const [projects, setProjects] = useState({
    id:Date.now(),
    project: [],
    task:[]
  }
  )
  function handelAddTask(task) {
    setProjects((prevState)=>{
      const newTask={
        id:Date.now(),
        projectID:prevState.id,
        text:task
      }
      return{
        ...prevState,
        task:[...prevState.task,newTask]
      }
    })

  }
  function handelDeleteTask(id) {
    setProjects((prevState)=>({
      ...prevState,
      task:prevState.task.filter((ts)=>ts.id!==id)
    }))

  }


  // useEffect(() => {
  //   localStorage.setItem('projects', JSON.stringify(projects))
  // }, [projects])

  const [selectedProjects, setSelectedProjects] = useState([])
  const [noproject, setnoproject] = useState(false)
  const [selectProject, setselectProject] = useState(false)


  function handelAddProject(newProject) {

    setProjects(prevState => ({
      ...prevState,
      project: [...prevState.project, newProject]
    }));
    setnoproject(false);
  }
  function handelNoprojectYes() {
    setnoproject(true)
  }
  function handelNoprojectNo() {
    setnoproject(false)
  }
  function handelSelectProject(id) {
    const selectedProject = projects.project.find(pr => pr.id === id)
    console.log(selectedProject)
    setSelectedProjects(selectedProject)
    setselectProject(true)
  }
  function handelClose() {
    setselectProject(false)
  }

  function handelDelete(id) {
    setProjects((prevState) => {
      return{
      ...prevState,
      project: prevState.project.filter((pr) => pr.id !== id)
    }})
    setselectProject(false)
  }
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Welcome</h1>
      <main>
        <div className="flex gap-10">
          <ProjectSideBar onAddProject={handelNoprojectYes}
            projects={projects.project}
            onSelectProject={handelSelectProject} />
          {noproject ? <InputGroupProject handelCancel={handelNoprojectNo} onAddProject={handelAddProject} />
            :
            (selectProject ? <SelectedProject project={selectedProjects}
              handelClose={handelClose} handelDelete={handelDelete}
              handelAddTask={handelAddTask}
              handelDeleteTask={handelDeleteTask}
              tasks={projects.task}
            /> : <DefaultProjectCont handelProject={handelNoprojectYes} />)}
        </div>
      </main>
    </>
  );
}

export default App;
