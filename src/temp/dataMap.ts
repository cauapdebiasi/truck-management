import { ICategoriesMap, IModelsMap, IPartsMap } from "@/types/dataMap";

export const partsMap: IPartsMap = {
  "frota": {
    id: "placa",
    name: "Frota",
    category: "identificador"
  },
  "placa": {
    id: "placa",
    name: "Placa",
    category: "identificador"
  },
  "filtrolubrificante": {
    id: "filtrolubrificante",
    name: "",
    category: "",
    threshold: {
      "r480": 30000
    }
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
  "scania": {
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
    }
  },
  "volvo": {
    "fh540classic": {
      id: "fh540classic",
      name: "Volvo FH 540 Classic"
    }
  }
}
