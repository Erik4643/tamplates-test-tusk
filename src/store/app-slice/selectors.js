import { createSelector } from '@reduxjs/toolkit'

export const appState = (state) => state.app

export const appSelectors = createSelector(appState, (state) => state)
