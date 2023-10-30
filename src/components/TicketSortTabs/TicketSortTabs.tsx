import { connect } from 'react-redux'

import Tabs from '../Tabs'
import type { AppDispatch, RootState } from '../../state'
import { setSort, type SortValue } from '../../state/slices/search-params'

const OPTIONS = [
  {
    id: 0,
    value: 'cheapest',
    text: 'Самый дешевый',
  },
  {
    id: 1,
    value: 'fastest',
    text: 'Самый быстрый',
  },
  {
    id: 2,
    value: 'optimal',
    text: 'Оптимальный',
  },
]

function getIdForValue(value: SortValue) {
  switch (value) {
    case 'cheapest':
      return 0
    case 'fastest':
      return 1
    case 'optimal':
      return 2
    default:
      return -1
  }
}

const mapStateToProps = (state: RootState) => ({
  options: OPTIONS,
  value: getIdForValue(state.searchParams.sort),
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (id: number) => {
    switch (id) {
      case 0:
        dispatch(setSort('cheapest'))
        break
      case 1:
        dispatch(setSort('fastest'))
        break
      case 2:
        dispatch(setSort('optimal'))
        break
      default:
    }
  },
})

const TicketSortTabs = connect(mapStateToProps, mapDispatchToProps)(Tabs)

export default TicketSortTabs
