import { MainContext, MainContextType } from "@/contexts/MainContext"
import { useContext } from "react"

/** Custom Hook used exclusively to acess the Main context */
const useMainContext = (): MainContextType | null => {
  return useContext(MainContext)
}

export default useMainContext
