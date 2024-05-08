import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jobReducer from './slices/jobSlice/jobSlice'

const rootState = combineReducers({
  job: jobReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
