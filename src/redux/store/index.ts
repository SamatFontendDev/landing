import { configureStore } from '@reduxjs/toolkit'
import appSliceReducer from '../reducers/index'

const store = configureStore({
    reducer: {
        appSlice: appSliceReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
