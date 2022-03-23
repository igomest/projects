import { useState } from "react"
import { ProjectCard } from "../ProjectCard"
import { ProjectForm } from "../ProjectForm"
import { Container } from "./styles"
import { useProjects } from "../../hooks/useProjects"

export const ProjectList = () => {
    const { projects } = useProjects()

    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    const handleEdit = (projects: any) => {
        setProjectBeingEdited(projects)
    }

    const cancelEditing = () => {
        setProjectBeingEdited({})
    }


    return (
        <Container>
            {projects.map((project) => (
                <div key={project.id}>
                    {project === projectBeingEdited ? (
                        <ProjectForm
                            onCancel={cancelEditing}
                            project={project}
                        />
                    ) : (
                        <ProjectCard
                            project={project}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            ))}
        </Container>
    )
}