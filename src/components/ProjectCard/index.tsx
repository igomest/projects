import { ProjectCardProps } from "../../interfaces/propTypes"
import { Budget, Container, Content, ImageContainer, Separator, Title } from "./styles"


export const ProjectCard = ({project}: ProjectCardProps) => {
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

                <button type="button">Edit</button>
        </Container>
    )
}