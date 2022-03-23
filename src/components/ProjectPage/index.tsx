import { useProjects } from "../../hooks/useProjects"
import { Loading } from "../Loading"
import { ProjectList } from "../ProjectList"
import { Container } from "../ProjectList/styles"
import { MoreContainer } from "./style"

export const ProjectPage = () => {
    const {
        loading,
        error,
        handleMoreClick,
    } = useProjects()


    return (
        <Container>
            <ProjectList />

            {error && (
                <div className="teste">
                    <section>
                        <p>
                            {error}
                        </p>
                    </section>
                </div>
            )}

            {!loading && !error && (
                <MoreContainer>
                    <button
                        type="button"
                        onClick={handleMoreClick}
                    >
                        <strong>More...</strong>
                    </button>
                </MoreContainer>
            )}

            {loading && (
                <Loading />
            )}
        </Container>
    )
}