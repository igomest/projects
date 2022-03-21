import { useEffect, useState } from "react"
import { Loading } from "../Loading"
import { ProjectList } from "../ProjectList"
import { Container } from "../ProjectList/styles"
import { MOCK_PROJECTS } from "./MockProjects"
import { Project } from "./Project"
import { projectAPI } from "./projectAPI"

export const ProjectPage = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((pr: Project) => {
            return pr.id === project.id ? project : pr
        })

        setProjects(updatedProjects)
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
                <div>
                    <section>
                        <p>
                            {error}
                        </p>
                    </section>
                </div>
            )}

            {!loading && !error && (
                <div>
                    <div>
                        <button type="button" onClick={handleMoreClick}>More...</button>
                    </div>
                </div>
            )}

            {loading && (
                <Loading />
            )}
        </Container>
    )
}