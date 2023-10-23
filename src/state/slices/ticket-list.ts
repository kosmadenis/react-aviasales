import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// const initialState: Model.Response = {
//   tickets: [],
//   stop: false,
// }

const initialState: Model.Response = {
  tickets: Array.prototype.fill.call(new Array(5), {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: new Date('2023-10-04T07:45:00.000Z'),
        duration: 1275,
        stops: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: new Date('2023-10-04T08:20:00.000Z'),
        duration: 810,
        stops: ['HKG'],
      },
    ],
  }),
  stop: false,
}

const ticketListSlice = createSlice({
  name: 'ticketList',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Model.Response>) => {
      state.tickets.push(...action.payload.tickets)
      state.stop = action.payload.stop
    },
  },
})

export const { append } = ticketListSlice.actions

export default ticketListSlice.reducer
