import { ButtonContainer, Container } from "./styles"

export const ProjectForm = () => {
    return (
        <Container>
            <label>Project Name</label>
            <input
                type="text"
                name="enter name"
                placeholder="Enter name"
            />

            <label>Project Description</label>
            <textarea
                name="description"
                placeholder="Enter description"
            />

            <label>Project Budget</label>
            <input
                type="number"
                name="enter name"
                placeholder="Enter budget"
            />

            <label>Active?</label>
            <input
                className="active"
                type="checkbox"
                name="isActive"
            />

            <ButtonContainer>
                <button type="button">Save</button>
                <button type="button">Cancel</button>
            </ButtonContainer>
        </Container>
    )
}