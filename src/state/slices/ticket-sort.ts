import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type TicketSortState = 'cheapest' | 'fastest' | 'optimal'

const initialState = 'cheapest' as TicketSortState

const ticketSortSlice = createSlice({
  name: 'ticketSort',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<TicketSortState>) => action.payload,
  },
})

export const { set } = ticketSortSlice.actions

export default ticketSortSlice.reducer
