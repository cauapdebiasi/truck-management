import { BrowserRouter } from "react-router-dom"
import Base from "@/screens/Base"
import MainContext from "./contexts/MainContext"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainContext>
        <Base />
      </MainContext>
    </BrowserRouter>
  )
}

export default App
