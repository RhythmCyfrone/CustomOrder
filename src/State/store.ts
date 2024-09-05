import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../Components/AppComponents/Sidebar/sidebarSlice'
import tableReducer from '../Components/AppComponents/Table/TableSlice'
import orderTypeReducer from '../Components/AppComponents/OrderType/orderTypeSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tableSelect: tableReducer,
    orderType: orderTypeReducer 
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store