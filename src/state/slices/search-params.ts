import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type SortValue = 'cheapest' | 'fastest' | 'optimal'

export type FilterKey = 'all' | 'none' | 'one' | 'two' | 'three'

export type FilterMap = {
  [key in FilterKey]: boolean
}

interface SearchParams {
  sort: SortValue
  transfers: FilterMap
}

const initialState: SearchParams = {
  sort: 'cheapest',
  transfers: {
    all: true,
    none: true,
    one: true,
    two: true,
    three: true,
  },
}

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortValue>) => {
      state.sort = action.payload
    },
    setTransfers: (
      state,
      action: PayloadAction<{ key: FilterKey; value: boolean }>
    ) => {
      const { key, value } = action.payload

      state.transfers[key] = value

      if (key === 'all') {
        state.transfers.none = value
        state.transfers.one = value
        state.transfers.two = value
        state.transfers.three = value
      } else if (!value) {
        state.transfers.all = false
      } else if (
        state.transfers.none &&
        state.transfers.one &&
        state.transfers.two &&
        state.transfers.three
      ) {
        state.transfers.all = true
      }
    },
  },
})

export const { setSort, setTransfers } = searchParamsSlice.actions

export default searchParamsSlice.reducer
