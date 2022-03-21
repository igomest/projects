import { ProjectListProps } from "../../interfaces/propTypes"
import { ProjectCard } from "../ProjectCard"
import { Container } from "./styles"

export const ProjectList = ({ projects }: ProjectListProps) => {
    const items = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ))

    return (
        <Container>
            {items}
        </Container>
    )
}