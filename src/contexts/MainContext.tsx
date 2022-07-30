import { IAppPreferences, ICategoriesMap, IMappedPart, IModelsMap, IPartCategory, IPartId, IPartMap, IPartsMap, IPartThreshold, IPartValue, IReplacement, IReplacementDate, IReplacementKm, IVehicle } from "@/types/dataMap"
import React, { createContext, useEffect, useState } from "react"
import { vehicle, vehicle as vehicleFile } from "@/temp/vehicle"
import { isArrayEmpty, isObjectEmpty } from "@/utils/utils"
import { partsMap as partsMapFile, categoriesMap as categoriesMapFile, modelsMap as modelMapFile, preferences as preferencesFile } from "@/temp/dataMap"

type PartsProviderProps = {
  children: React.ReactNode
}

type IApp = {
  vehicle: IVehicle,
  partsMap: IPartsMap,
  categoryMap: ICategoriesMap,
  modelsMap: IModelsMap,
  preferences: IAppPreferences
};

export type MainContextType = {
  getLastReplacementValue: (partId: IPartId) => IPartValue | IReplacementKm | IReplacementDate;
  getPartThreshold: (partId: IPartId) => IPartThreshold;
  getAllParts: (categories?: IPartCategory[]) => IMappedPart[]
}

export const MainContext = createContext<MainContextType>({} as MainContextType)

/** Main context
 * Used for storing the current vehicle data, current data map and
 * all functions related to the data manipulation involving the program
 */
const MainProvider: React.FC<PartsProviderProps> = ({ children }) => {

  const [app, setApp] = useState<IApp>({} as IApp)


  const loadAllDataMaps = () => {
    //TODO: replace static files with json files from the system
    //FIXME: temporary way for loading the vehicle
    setApp({
      vehicle: vehicleFile,
      partsMap: partsMapFile,
      categoryMap: categoriesMapFile,
      modelsMap: modelMapFile,
      preferences: preferencesFile
    })
  }
  /**
       takes as a parameter the partId to get the last replacement value, it then tries to get the last replacement by searching for the replacement with the higher KM, if there is no replacement it returns 0, if the part category is an identifier it returns the last replacement value, else it just returns the last replacement KM value
     */
  const getLastReplacementValue = (partId: IPartId): IPartValue | IReplacementKm | IReplacementDate => {
    const lastReplacement = app?.vehicle?.[partId]?.replacements.reduce<IReplacement>((previous, current) => {
      if (previous.km > current.km) return previous
      return current
    }, {} as IReplacement)

    if (!lastReplacement) return 0
    if (app?.partsMap?.[partId]?.category.includes("identificador")) return lastReplacement?.value ? lastReplacement.value : ""

    //TODO: return based on the user settings prefered unit
    return lastReplacement.km
  }

  const vehicleModel = getLastReplacementValue("modelo")

  /**
     takes as a parameter the partId to get the threshold, and returns the threshold for the current vehicle model if neither the threshold or the vehicleModel doesn't exist it returns 0
   */
  const getPartThreshold = (partId: IPartId): IPartThreshold => {
    if (!vehicleModel) return 0
    const threshold = app?.partsMap?.[partId]?.threshold?.[vehicleModel]
    if (!threshold) return 0
    return threshold
  }

  /**
     takes as an optional parameter a list of categories, and goes through all the existing parts of the app.partMap searching for items that contain the specified category, if the categories list is not given then it just returns all the parts
   */
  const getAllParts = (categories?: IPartCategory[]): IMappedPart[] => {
    if (isObjectEmpty(app?.vehicle)) return []
    if (isObjectEmpty(app?.partsMap)) return []
    if (!categories) {
      return Object.values<IPartMap>(app.partsMap).reduce<IMappedPart[]>((mappedParts, partMap) => [...mappedParts, {
        id: partMap.id,
        name: partMap.name,
        lastValue: getLastReplacementValue(partMap.id),
        modelThreshold: getPartThreshold(partMap.id)
      }], [])
    }
    return Object.values<IPartMap>(app.partsMap).reduce<IMappedPart[]>((mappedParts, partMap) => {
      // If the item doesn't contain any of the given categories return the previous array
      if (!categories.some(category => partMap.category.includes(category))) return mappedParts

      // If the part does contain the class returns all the previous items with the new item
      return [...mappedParts, {
        id: partMap.id,
        name: partMap.name,
        lastValue: getLastReplacementValue(partMap.id),
        modelThreshold: getPartThreshold(partMap.id)
      }]
    }, [])
  }

  useEffect(() => {
    loadAllDataMaps()
  }, [])
  return <MainContext.Provider value={{ getLastReplacementValue, getPartThreshold, getAllParts }}>{children}</MainContext.Provider>
}

export default MainProvider
