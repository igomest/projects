import { Project } from "../components/ProjectPage/Project"
import { ReactNode } from 'react'


export interface ProjectCardProps {
    project: Project
    onEdit: (project: Project) => void
}

export interface ProjectFormProps {
    project: Project
    onCancel: () => void
}

export interface ProjectsProviderProps {
    children: ReactNode
}

export interface ProjectsContextData {
    projects: Project[]
    loading: boolean
    error: string
    handleMoreClick: () => void
    saveProject: (project: Project) => void
}