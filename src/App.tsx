import { BrowserRouter } from "react-router-dom"
import Base from "@/screens/Base"
import PartsContext from "./contexts/PartsContext"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PartsContext>
        <Base />
      </PartsContext>
    </BrowserRouter>
  )
}

export default App
