import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../Components/AppComponents/Sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store