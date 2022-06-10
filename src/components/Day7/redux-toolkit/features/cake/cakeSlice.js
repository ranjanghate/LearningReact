import { createSlice } from '@reduxjs/toolkit'
// createSlice uses the immer library under the hood

const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
