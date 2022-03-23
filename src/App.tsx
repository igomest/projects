import { Header } from "./components/Header"
import { ProjectPage } from "./components/ProjectPage"
import { ProjectsProvider } from "./hooks/useProjects"
import { GlobalStyle } from "./styles/global"


export const App = () => {
  return (
    <ProjectsProvider>
      <Header />
      <ProjectPage />
      <GlobalStyle />
    </ProjectsProvider>
  )
}