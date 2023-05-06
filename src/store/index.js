import { configureStore } from '@reduxjs/toolkit'
import products from './apps/products'

export const store = configureStore({
  reducer: {
    products
  },
})
