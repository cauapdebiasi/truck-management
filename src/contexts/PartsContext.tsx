import { ICategoriesMap, IModelsMap, IPart, IPartMap, IPartsMap, IReplacement, IVehicle } from "@/types/dataMap"
import React, { createContext, useEffect, useState } from "react"
import { partsMap as partsMapFile, categoriesMap as categoriesMapFile, modelsMap as modelMapFile } from "@/temp/dataMap"
import { vehicle as vehicleFile } from "@/temp/vehicle"
import { isArray, isArrayEmpty } from "@/utils/utils"

type PartsProviderProps = {
  children: React.ReactNode
}

export type PartsContextType = {
  vehicle: IVehicle | null;
  partMap: IPartsMap | null;
  categoryMap: ICategoriesMap | null;
  modelMap: IModelsMap | null;
  loadAllDataMaps: () => void;
  filterAllPartsByCategory: (categoriesList: string[]) => IPartMap[] | null;
  getLastReplacementFromPartId: (partId: string) => IReplacement | null;
}

export const PartsContext = createContext<PartsContextType | null>(null)

/** Main context
 * Used for storing the current vehicle data, current data map and
 * all functions related to the data manipulation involving the program
 */
const PartsProvider: React.FC<PartsProviderProps> = ({ children }) => {

  const [vehicle, setVehicle] = useState<IVehicle | null>(null)
  const [partMap, setPartMap] = useState<IPartsMap | null>(null)
  const [categoryMap, setCategoryMap] = useState<ICategoriesMap | null>(null)
  const [modelMap, setModelMap] = useState<IModelsMap | null>(null)

  const loadAllDataMaps = () => {
    //TODO: replace static files with json files from the system
    setPartMap(partsMapFile)
    setCategoryMap(categoriesMapFile)
    setModelMap(modelMapFile)

    //FIXME: temporary way for loading the vehicle
    setVehicle(vehicleFile)
  }
  /**
   * Returns all parts that match the given category or categories in the partMap by getting the ids of every part and looping through the partMap to check if any of the current part categories match the given category
   */
  const filterAllPartsByCategory = (categoriesList: string[]): IPartMap[] | null => {
    if (vehicle == null) return null
    if (partMap == null) return null
    const allPartEntries = Object.entries(partMap)
    return allPartEntries.reduce<IPartMap[]>((filtered, [partId, partMap]) => {
      if (categoriesList.some(category => partMap.category.includes(category))) return [...filtered, partMap]
      return filtered
    }, [])
  }
  /**
   * Get the last replacement of the given part Id from the current vehicle object by looping through the replacements and returning the one with the higher KM value
  */
  const getLastReplacementFromPartId = (partId: string): IReplacement | null => {
    if (vehicle == null) return null
    const allPartReplacements = vehicle[partId].replacements
    if (!allPartReplacements) return null
    if (isArrayEmpty(allPartReplacements)) return null
    return allPartReplacements.reduce((lastReplacement, currentReplacement) =>
      lastReplacement.km > currentReplacement.km ? lastReplacement : currentReplacement
    )
  }

  useEffect(() => {
    loadAllDataMaps()
  }, [])
  return <PartsContext.Provider value={{ vehicle, partMap, categoryMap, modelMap, loadAllDataMaps, filterAllPartsByCategory, getLastReplacementFromPartId }}>{children}</PartsContext.Provider>
}

export default PartsProvider
