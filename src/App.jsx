import ProjectSideBar from "./components/ProjectSidebar";
import InputGroupProject from "./components/InputGroupProject";
import DefaultProjectCont from "./components/DefaultProjectCont";
import SelectedProject from "./components/SelectedProject";
import { useState, useEffect } from "react";
import Header from "./components/Header";
function App() {
  const [Hide, setHide] = useState(false)

  const [selectedProjects, setSelectedProjects] = useState([])
  const [noproject, setnoproject] = useState(false)
  const [selectProject, setselectProject] = useState(false)
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : { project: [], task: [] };
  });
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  function handelAddTask(newTask) {
    setProjects((prevState) => {
      return {
        ...prevState,
        task: [...prevState.task, { ...newTask }]
      }
    })

  }
  function handelDeleteTask(id) {
    setProjects((prevState) => ({
      ...prevState,
      task: prevState.task.filter((ts) => ts.id !== id)
    }))

  }


  function handelAddProject(newProject) {

    setProjects(prevState => ({
      ...prevState,
      project: [...prevState.project, newProject]
    }));
    setnoproject(false);
  }
  function handelNoprojectYes() {
    setnoproject(true)
    setselectProject(false)
  }
  function handelNoprojectNo() {
    setnoproject(false)
  }
  function handelSelectProject(id) {
    const selectedProject = projects.project.find(pr => pr.id === id)
    
    setSelectedProjects(selectedProject)
    setselectProject(true)
  }
  function handelClose() {
    setselectProject(false)
  }

  function handelDelete(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        project: prevState.project.filter((pr) => pr.id !== id)
      }
    })
    setselectProject(false)
  }

  function handelClickHideYes() {
    setHide(true)
  }
  function handelClickHideNo() {
    setHide(false)
  }
  return (
    <>
      <Header handelHideYes={handelClickHideYes} />
      <main>
        <div className="flex gap-10">
          <ProjectSideBar onAddProject={handelNoprojectYes}
            projects={projects.project}
            onSelectProject={handelSelectProject}
            handelHideNo={handelClickHideNo}
            hide={Hide} />
          {noproject ? (selectProject ? <SelectedProject project={selectedProjects}
            handelClose={handelClose} handelDelete={handelDelete}
            handelAddTask={handelAddTask}
            handelDeleteTask={handelDeleteTask}
            tasks={projects.task}
            seletedProjectID={selectedProjects.id}
          /> : <InputGroupProject handelCancel={handelNoprojectNo} onAddProject={handelAddProject} />)
            :
            (selectProject ? <SelectedProject project={selectedProjects}
              handelClose={handelClose} handelDelete={handelDelete}
              handelAddTask={handelAddTask}
              handelDeleteTask={handelDeleteTask}
              tasks={projects.task}
              seletedProjectID={selectedProjects.id}
            /> : <DefaultProjectCont handelProject={handelNoprojectYes} />)}
        </div>
      </main>
    </>
  );
}

export default App;
