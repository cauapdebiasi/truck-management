import { BrowserRouter, Routes, Route } from "react-router-dom"
import Base from "@/screens/Base"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  )
}

export default App
