import { ProjectListProps } from "../../interfaces/propTypes"
import { ProjectCard } from "../ProjectCard"
import { ProjectForm } from "../ProjectForm"
import { Container } from "./styles"

export const ProjectList = ({ projects }: ProjectListProps) => {

    return (
        <>
            {projects.map((project) => (
                <Container key={project.id}>
                    <ProjectCard project={project} />
                    <ProjectForm />
                </Container>
            ))}
        </>
    )}