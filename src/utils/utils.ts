export const isObjectEmpty = (object: any): boolean => {
  if (!object) return true
  return Object.keys(object).length === 0
}
/** Checks if the given object is an array */
export const isArray = (object: any): boolean =>
  Object.prototype.toString.call(object) === "[object Array]"
/** Checks if the given array is empty or not */
export const isArrayEmpty = (array: any[]): boolean =>
  array.length === 0
/** Returns the given number formated to a string with a thousands separator
 *
 * Ex.: if the number is 123456, the returned value will be 123.456
 */
export const toFormatedKmString = (km: number) => {
  const separator = "."
  return km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
export const getReplacementDurationInKm = (currentKm: number, replacementKm: number): number => {
  return currentKm - replacementKm
}
export const readJsonFile = (filePath: string): any => {
  return JSON.parse(window.fs.readFileSync(filePath, { encoding: "utf-8" }))
}
