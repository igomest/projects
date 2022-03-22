import { useEffect, useState } from "react"
import { Loading } from "../Loading"
import { ProjectList } from "../ProjectList"
import { Container } from "../ProjectList/styles"
import { Project } from "./Project"
import { projectAPI } from "./projectAPI"
import { MoreContainer } from "./style"

export const ProjectPage = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const saveProject = (project: Project) => {
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

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }


    return (
        <Container>
            <ProjectList
                projects={projects}
                onSave={saveProject}
            />

            {error && (
                <div className="teste">
                    <section>
                        <p>
                            {error}
                        </p>
                    </section>
                </div>
            )}

            {!loading && !error && (
                <MoreContainer>
                    <button
                        type="button"
                        onClick={handleMoreClick}
                    >
                        <strong>More...</strong>
                    </button>
                </MoreContainer>
            )}

            {loading && (
                <Loading />
            )}
        </Container>
    )
}