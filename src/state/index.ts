import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import type AviasalesApi from '../services/aviasales-api'

import searchParamsReducer from './slices/search-params'
import searchDataReducer from './slices/search-data'

const rootReducer = combineReducers({
  searchParams: searchParamsReducer,
  searchData: searchDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export interface ThunkArg {
  api: AviasalesApi
}

export function createStore(thunkArg: ThunkArg) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: thunkArg,
        },
      }),
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export type ThunkFn = (
  dispatch: AppDispatch,
  getState: () => RootState,
  arg: ThunkArg
) => void
