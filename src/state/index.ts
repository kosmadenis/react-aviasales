import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import transfersFilterReducer from './slices/transfers-filter'
import ticketSortReducer from './slices/ticket-sort'
import ticketListReducer from './slices/ticket-list'

const rootReducer = combineReducers({
  transfersFilter: transfersFilterReducer,
  ticketSort: ticketSortReducer,
  ticketList: ticketListReducer,
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export default store
