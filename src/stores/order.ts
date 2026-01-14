import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { paymentMethodList, peculiarityList } from '@/constants/lists'
import { getFromLocalStorage, saveToLocalStorage } from '@/helpers'

type PaymentMethod = (typeof paymentMethodList)[number]
type Peculiarity = (typeof peculiarityList)[number]

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
  paymentMethod: 'Наличные',
  prepayment: false,
  peculiarities: [],
  description: '',
}

export const useOrderStore = defineStore('order', () => {
  const snackbar = ref(false)
  const isEditing = ref(getFromLocalStorage('isEditing', true))
  const order: Ref<IOrder> = ref(getFromLocalStorage('order', defaultOrder))

  watch(isEditing, (val) => {
    saveToLocalStorage('isEditing', val)
  })

  function saveOrder() {
    saveToLocalStorage('order', order.value)
    isEditing.value = false
    snackbar.value = true
  }

  return { snackbar, isEditing, order, saveOrder }
})
