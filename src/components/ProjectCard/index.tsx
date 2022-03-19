import { Budget, Container, Content, ImageContainer, Separator, Title } from "./styles"


export const ProjectCard = () => {
    return (
        <Container>
            <ImageContainer>
                <img src="https://raroin.creabik.com/assets/img/items/item_1.png" alt="" />
            </ImageContainer>

                <Title>
                    <p>Project Name</p>
                </Title>

                <Content>
                    <p>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </Content>

                <Budget>
                    <p>Orçamento: R$200,000</p>
                </Budget>

                <Separator />

                <button type="button">Edit</button>
        </Container>
    )
}