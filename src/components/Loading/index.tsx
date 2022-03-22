import { Container } from "./styles"
import loading from "../../icons/loading.svg"

export const Loading = () => {
    return (
        <Container>
           <img src={loading} alt="Loading Icon" />
           <p>Loading...</p>
        </Container>
    )
}