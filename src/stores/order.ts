import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { paymentMethodList, peculiarityList } from '@/constants/lists'

type PaymentMethod = (typeof paymentMethodList)[number]
type Peculiarity = (typeof peculiarityList)[number]

const getFromLocalStorage = (key: string, defaultValue: any) => {
  return JSON.parse(localStorage.getItem(key) || 'null') || defaultValue
}

interface IOrder {
  name: string
  weight: number | null
  city: string
  deadline: string | null
  paymentMethod: PaymentMethod | null
  prepayment: boolean
  peculiarities: Peculiarity[]
  description: string
}

const defaultOrder: IOrder = {
  name: '',
  weight: null,
  city: '',
  deadline: null,
  paymentMethod: null,
  prepayment: false,
  peculiarities: [],
  description: '',
}

export const useOrderStore = defineStore('order', () => {
  const isEditing = ref(getFromLocalStorage('isEditing', true))
  const order: Ref<IOrder> = ref(getFromLocalStorage('order', defaultOrder))

  return { isEditing, order }
})
