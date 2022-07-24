export interface IPart {
  value?: string | string[];
  replacements?: IReplacement[];
}

export type IVehicle = Record<string, IPart>

export interface IPartMap {
  id: string;
  name: string;
  category: string;
  threshold?: Record<string, number>;
}

export type IPartsMap = Record<string, IPartMap>

export interface IReplacement {
  km: number;
  date: string;
  observations: string;
}

export type ICategoriesMap = string[]

export type IModelsMap = Record<string, Record<string, IModel>>

export interface IModel {
  id: string;
  name: string;
}
