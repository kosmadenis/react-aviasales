import type { ThunkFn } from '..'
import { appendTickets, setSearchId, setStatus } from '../slices/search-data'

export const fetchAllTickets: () => ThunkFn =
  () =>
  async (dispatch, getState, { api }) => {
    if (getState().searchData.status === 'loading') {
      return
    }

    try {
      dispatch(setStatus('loading'))

      const searchId =
        getState().searchData.searchId ?? (await api.search()).searchId

      dispatch(setSearchId(searchId))

      for (;;) {
        const batch = await api.tickets(searchId)

        dispatch(appendTickets(batch.tickets))

        if (batch.stop) {
          dispatch(setStatus('done'))
          return
        }
      }
    } catch {
      dispatch(setStatus('error'))
    }
  }
