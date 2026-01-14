export const requiredValidator = (value: string) => {
  if (value) return true
  return 'Поле обязательно для ввода'
}

export const orderNameValidator = (name: string) => {
  if (name.length <= 100) return true
  return 'Название заказа не должно превышать 100 символов'
}

export const dateValidator = (date: string) => {
  if (/^\d{2}.\d{2}.\d{4}$/.test(date)) return true
  return 'Дата должна быть в формате дд.мм.гггг'
}

export const orderWeightValidator = (weight: number) => {
  if (weight > 0 && weight <= 10000) return true
  return 'Вес заказа должен быть больше 0 и меньше 10000'
}
