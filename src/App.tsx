import { Header } from "./components/Header"
import { ProjectPage } from "./components/ProjectPage"
import { GlobalStyle } from "./styles/global"


export const App = () => {
    return (
      <> 
        <Header />
        <ProjectPage />
        <GlobalStyle />
      </>
    )
}