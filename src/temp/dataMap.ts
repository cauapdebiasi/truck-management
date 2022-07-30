import { IAppPreferences, ICategoriesMap, IModelsMap, IPartsMap } from "@/types/dataMap";

export const partsMap: IPartsMap = {
  "frota": {
    id: "frota",
    name: "Frota",
    category: "identificador"
  },
  "placa": {
    id: "placa",
    name: "Placa",
    category: "identificador"
  },
  "modelo": {
    id: "modelo",
    name: "Modelo",
    category: "identificador"
  },
  "filtrolubrificante": {
    id: "filtrolubrificante",
    name: "Filtro Lubrificante",
    category: "filtro",
    threshold: {
      "r480": 30000
    }
  },
  "bombaarla": {
    id: "bombaarla",
    name: "Bomba do Arla",
    category: "arla"
  }
}

export const categoriesMap: ICategoriesMap = [
  "identificador",
  "filtro",
  "motor",
  "arla",
  "suspensao",
  "caixa",
  "direcao",
  "freio"
]

export const modelsMap: IModelsMap = {
  "r420": {
    id: "r420",
    name: "Scania R420"
  },
  "r480": {
    id: "r480",
    name: "Scania R480"
  },
  "r540": {
    id: "r540",
    name: "Scania R540"
  },
  "fh540classic": {
    id: "fh540classic",
    name: "Volvo FH 540 Classic"
  }
}

export const preferences: IAppPreferences = {
  "partWarningThreshold": 0,
  "preferedValueType": "km"
}
