import { createSelector, createSlice } from '@reduxjs/toolkit'
import { Positions } from 'utils/constants'

const selectState = (state) => state.app

const initialState = {
  selectedTemplate: Positions.left
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedTemplate: (state, { payload }) => {
      state.selectedTemplate = payload
    }
  }
})

export const { setSelectedTemplate } = appSlice.actions

export const appSelector = createSelector(selectState, (state) => state)

export const appReducer = appSlice.reducer
