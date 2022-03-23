import { useContext, useEffect, useState, createContext } from "react"
import { Project } from "../components/ProjectPage/Project"
import { projectAPI } from "../components/ProjectPage/projectAPI"
import { ProjectsProviderProps, ProjectsContextData } from "../interfaces/propTypes"


const ProjectsContext = createContext<ProjectsContextData>(
    {} as ProjectsContextData
)

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        async function loadProjects() {
            setLoading(true)
            try {
                const data = await projectAPI.get(currentPage)
                setError('')

                if (currentPage === 1) {
                    setProjects(data)
                } else {
                    setProjects((projects) => [...projects, ...data])
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message)
                }
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [currentPage])
    

    const saveProject = (project: Project) => { // Definir função de salvar no context 
        projectAPI
            .put(project)
            .then((updatedProject) => {
                let updatedProjects = projects.map((pr: Project) => {
                    return pr.id === project.id ? new Project(updatedProject) : pr
                })
                setProjects(updatedProjects)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }


    return (
        <ProjectsContext.Provider value={{ projects, saveProject, handleMoreClick, error, loading }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjects = () => {
    const context = useContext(ProjectsContext)

    return context
}