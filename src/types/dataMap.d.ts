export interface IPart {
  replacements: IReplacement[];
}

export type IVehicle = Record<string, IPart>
export type IPartValue = string
export type IPartId = string
export type IPartName = string
export type IPartCategory = string
export type IPartThreshold = number
export type IPartMapThreshold = Record<string, IPartThreshold>

export interface IPartMap {
  id: IPartId;
  name: IPartName;
  category: IPartCategory;
  threshold?: IPartMapThreshold;
}

export type IPartsMap = Record<string, IPartMap>
export type IMappedPart = {
  id: IPartId,
  name: IPartName,
  lastValue: IPartValue | IReplacementKm | IReplacementDate,
  modelThreshold: IPartThreshold
}
type IAllParts = IMappedPart[]

export interface IReplacement {
  value?: IPartValue;
  km: IReplacementKm;
  date: IReplacementDate;
  observations: string;
}

export type IReplacementKm = number
export type IReplacementDate = string

export type ICategoriesMap = string[]

export type IModelsMap = Record<string, IModel>

export interface IModel {
  id: string;
  name: string;
}

export type IAppPreferences = Record<string, T>
