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
                <p>Budget:</p>
                <strong>
                    <p className="budget">
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(project.budget)}
                    </p>
                </strong>
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