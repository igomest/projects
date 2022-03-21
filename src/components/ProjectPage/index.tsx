import { ProjectList } from "../ProjectList"
import { MOCK_PROJECTS } from "./MockProjects"


export const ProjectPage = () => {
    return (
        <>
            <ProjectList projects={MOCK_PROJECTS}/>
        </>
    )
}