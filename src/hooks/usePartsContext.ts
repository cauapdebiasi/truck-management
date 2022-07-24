import { PartsContext, PartsContextType } from "@/contexts/PartsContext"
import { useContext } from "react"

/** Custom Hook used exclusively to acess the Parts context */
const usePartsContext = (): PartsContextType | null => {
  return useContext(PartsContext)
}

export default usePartsContext
