import { connect } from 'react-redux'

import Tabs from '../Tabs'
import type { AppDispatch, RootState } from '../../state'
import { set, type TicketSortState } from '../../state/slices/ticket-sort'

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

function getIdForStateValue(stateValue: TicketSortState) {
  switch (stateValue) {
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
  value: getIdForStateValue(state.ticketSort),
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (id: number) => {
    switch (id) {
      case 0:
        dispatch(set('cheapest'))
        break
      case 1:
        dispatch(set('fastest'))
        break
      case 2:
        dispatch(set('optimal'))
        break
      default:
    }
  },
})

const TicketSortTabs = connect(mapStateToProps, mapDispatchToProps)(Tabs)

export default TicketSortTabs
