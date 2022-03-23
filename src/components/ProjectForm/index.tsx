import { ButtonContainer, Container, ValidationCard } from "./styles"
import { ProjectFormProps } from "../../interfaces/propTypes"
import { SyntheticEvent, useState } from "react"
import { Project } from "../ProjectPage/Project"
import { useProjects } from "../../hooks/useProjects"

export const ProjectForm = ({ onCancel, project: initialProject }: ProjectFormProps) => {
    const { saveProject } = useProjects()

    const [project, setProject] = useState(initialProject)
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        budget: ''
    })

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!isValid()) return;
        saveProject(project)
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

        setErrors(() => validate(updatedProject))
    }

    const validate = (project: Project) => {
        let errors = { name: '', description: '',  budget: ''}

        if (project.name.length === 0) {
            errors.name = 'Name is required.'
        }

        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = 'Name needs to be at last 3 characters.'
        }

        if (project.description.length === 0) {
            errors.description = 'Description is required.'
        }

        if (project.budget === 0) {
            errors.budget = 'Budget must be more than $0.'
        }

        return errors
    }

    const isValid = () => {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        )
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
            {errors.name.length > 0 && (
                <ValidationCard>
                    <p>{errors.name}</p>
                </ValidationCard>
            )}

            <label>Project Description</label>
            <textarea
                name="description"
                placeholder="Enter description"
                value={project.description}
                onChange={handleChange}
            />
             {errors.description.length > 0 && (
                <ValidationCard>
                    <p>{errors.description}</p>
                </ValidationCard>
            )}

            <label>Project Budget</label>
            <input
                type="number"
                name="budget"
                placeholder="Enter budget"
                value={project.budget}
                onChange={handleChange}
            />
             {errors.budget.length > 0 && (
                <ValidationCard>
                    <p>{errors.budget}</p>
                </ValidationCard>
            )}

            <label>Active?</label>
            <input
                className="active"
                type="checkbox"
                name="isActive"
                checked={project.isActive}
                onChange={handleChange}
            />

            <ButtonContainer>
                <button type="button" onClick={handleSubmit}>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </ButtonContainer>
        </Container>
    )
}