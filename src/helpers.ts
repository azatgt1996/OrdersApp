export const getFromLocalStorage = (key: string, defaultValue: any) => {
  return JSON.parse(localStorage.getItem(key) || 'null') ?? defaultValue
}

export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const deepEqual = (obj1: any, obj2: any) => JSON.stringify(obj1) === JSON.stringify(obj2)
