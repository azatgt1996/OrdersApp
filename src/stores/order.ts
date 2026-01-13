import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

type PaymentMethod = 'Наличные' | 'Банковская карта' | null

interface IOrder {
  name: string
  weight: number
  city: string
  deadline: string
  paymentMethod: PaymentMethod
  prepayment: boolean
  peculiarities: string[]
  description: string
}

export const useOrderStore = defineStore('order', () => {
  const mode: Ref<'edit' | 'view'> = ref('view')
  const order: Ref<IOrder> = ref({
    name: '',
    weight: 0,
    city: '',
    deadline: null,
    paymentMethod: null,
    prepayment: false,
    peculiarities: [],
    description: '',
  })
  return { mode, order }
})
