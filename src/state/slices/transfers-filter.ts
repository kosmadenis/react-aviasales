import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit'

interface TransfersFilterState {
  all: boolean
  none: boolean
  one: boolean
  two: boolean
  three: boolean
}

const initialState: TransfersFilterState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
}

function unsetAllIfFalse(state: Draft<TransfersFilterState>, value: boolean) {
  if (!value) {
    state.all = false
  }
}

function setAllIfEachSet(state: Draft<TransfersFilterState>) {
  if (state.none && state.one && state.two && state.three) {
    state.all = true
  }
}

const transfersFilterSlice = createSlice({
  name: 'transfersFilter',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<boolean>) => {
      state.all = action.payload

      state.none = action.payload
      state.one = action.payload
      state.two = action.payload
      state.three = action.payload
    },

    setNone: (state, action: PayloadAction<boolean>) => {
      state.none = action.payload

      unsetAllIfFalse(state, action.payload)
      setAllIfEachSet(state)
    },

    setOne: (state, action: PayloadAction<boolean>) => {
      state.one = action.payload

      unsetAllIfFalse(state, action.payload)
      setAllIfEachSet(state)
    },

    setTwo: (state, action: PayloadAction<boolean>) => {
      state.two = action.payload

      unsetAllIfFalse(state, action.payload)
      setAllIfEachSet(state)
    },

    setThree: (state, action: PayloadAction<boolean>) => {
      state.three = action.payload

      unsetAllIfFalse(state, action.payload)
      setAllIfEachSet(state)
    },
  },
})

export const { setAll, setNone, setOne, setTwo, setThree } =
  transfersFilterSlice.actions

export default transfersFilterSlice.reducer
