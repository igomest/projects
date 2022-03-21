import { Project } from "../components/ProjectPage/Project"

export interface ProjectListProps {
    projects: Project[]
    onSave: (project: Project) => void
}

export interface ProjectCardProps {
    project: Project
    onEdit: (project: Project) => void
}

export interface ProjectFormProps {
    project: Project
    onCancel: () => void
    onSave: (project: Project) => void
}