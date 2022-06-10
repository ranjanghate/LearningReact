import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfIcecream: 25
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: function(state, action) {
      state.numOfIcecream--
    },
    restock: function(state, action) {
      state.numOfIcecream += action.payload
    }
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
