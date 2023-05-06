import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = [];
// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'users/fetchProducts',
  async (userId, thunkAPI) => {
    const response = await axios.get(`http://103.195.236.186:8088/products`)
    console.log(response)
    return response.data
  }
)

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action)
      // Add user to the state array
      // state.entities.push(action.payload)
    })
  },
})

export default productSlice.reducer