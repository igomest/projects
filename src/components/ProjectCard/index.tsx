import { ProjectCardProps } from "../../interfaces/propTypes"
import { Budget, Container, Content, ImageContainer, Separator, Title } from "./styles"
import { Project } from "../ProjectPage/Project"

export const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {

    const handleEditClick = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited)
    }

    return (
        <Container>
            <ImageContainer>
                <img src={project.imageUrl} alt="Imagem" />
            </ImageContainer>

            <Title>
                <p>{project.name}</p>
            </Title>

            <Content>
                <p>{project.description}</p>
            </Content>

            <Budget>
                <p>Orçamento: {project.budget}</p>
            </Budget>

            <Separator />

            <button
                type="button"
                onClick={() => handleEditClick(project)}
            >
                Edit
            </button>
        </Container>
    )
}