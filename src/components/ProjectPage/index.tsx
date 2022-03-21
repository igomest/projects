import { useState } from "react"
import { ProjectList } from "../ProjectList"
import { MOCK_PROJECTS } from "./MockProjects"
import { Project } from "./Project"

export const ProjectPage = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)


    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((pr: Project) => {
            return pr.id === project.id ? project : pr
        })

        setProjects(updatedProjects)
    }


    return (
        <>
            <ProjectList
                projects={projects}
                onSave={saveProject}
            />
        </>
    )
}