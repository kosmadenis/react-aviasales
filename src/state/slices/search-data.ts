import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Status = 'idle' | 'loading' | 'error' | 'done'

interface SearchData {
  status: Status
  searchId: string | null
  tickets: Model.Ticket[]
}

const initialState: SearchData = {
  status: 'idle',
  searchId: null,
  tickets: [],
}

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    setSearchId: (state, action: PayloadAction<string>) => {
      state.searchId = action.payload
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload
    },
    appendTickets: (state, action: PayloadAction<Model.Ticket[]>) => {
      state.tickets.push(...action.payload)
    },
  },
})

export const { setSearchId, setStatus, appendTickets } = searchDataSlice.actions

export default searchDataSlice.reducer
