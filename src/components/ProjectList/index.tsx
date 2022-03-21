import { useState } from "react"
import { ProjectListProps } from "../../interfaces/propTypes"
import { ProjectCard } from "../ProjectCard"
import { ProjectForm } from "../ProjectForm"
import { Container } from "./styles"
import { Project } from "../ProjectPage/Project"

export const ProjectList = ({ projects, onSave }: ProjectListProps) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project)
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
                            onSave={onSave}
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