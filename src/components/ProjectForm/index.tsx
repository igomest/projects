import { ButtonContainer, Container } from "./styles"
import { ProjectFormProps } from "../../interfaces/propTypes"
import { SyntheticEvent, useState } from "react"
import { Project } from "../ProjectPage/Project"

export const ProjectForm = ({ onCancel, onSave, project: initialProject }: ProjectFormProps) => {
    const [project, setProject] = useState(initialProject)

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        onSave(project)
    }

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target

        let updatedValue = type === 'checkbox' ? checked : value

        if (type === 'number') {
            updatedValue = Number(updatedValue)
        }

        const change = {
            [name]: updatedValue
        }

        let updatedProject: Project
        setProject((pr) => {
            updatedProject = new Project({ ...pr, ...change })
            return updatedProject
        })
    }


    return (
        <Container onSubmit={handleSubmit}>
            <label>Project Name</label>
            <input
                type="text"
                name="name"
                value={project.name}
                onChange={handleChange}
                placeholder="Enter name"
            />

            <label>Project Description</label>
            <textarea
                name="description"
                placeholder="Enter description"
                value={project.description}
                onChange={handleChange}
            />

            <label>Project Budget</label>
            <input
                type="number"
                name="budget"
                placeholder="Enter budget"
                value={project.budget}
                onChange={handleChange}
            />

            <label>Active?</label>
            <input
                className="active"
                type="checkbox"
                name="isActive"
                checked={project.isActive}
                onChange={handleChange}
            />

            <ButtonContainer>
                <button type="button" onClick={() => onSave(project)}>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </ButtonContainer>
        </Container>
    )
}