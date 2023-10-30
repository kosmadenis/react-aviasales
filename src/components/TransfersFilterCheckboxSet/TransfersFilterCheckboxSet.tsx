import { connect } from 'react-redux'

import CheckboxSet from '../CheckboxSet'
import type { AppDispatch, RootState } from '../../state'
import { setTransfers } from '../../state/slices/search-params'

const TITLE = 'Количество пересадок'

const OPTIONS = [
  {
    id: 0,
    text: 'Все',
  },
  {
    id: 1,
    text: 'Без пересадок',
  },
  {
    id: 2,
    text: '1 пересадка',
  },
  {
    id: 3,
    text: '2 пересадки',
  },
  {
    id: 4,
    text: '3 пересадки',
  },
]

const mapStateToProps = (state: RootState) => ({
  title: TITLE,
  options: OPTIONS,
  values: [
    state.searchParams.transfers.all,
    state.searchParams.transfers.none,
    state.searchParams.transfers.one,
    state.searchParams.transfers.two,
    state.searchParams.transfers.three,
  ],
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (id: number, value: boolean) => {
    switch (id) {
      case 0:
        dispatch(setTransfers({ key: 'all', value }))
        break
      case 1:
        dispatch(setTransfers({ key: 'none', value }))
        break
      case 2:
        dispatch(setTransfers({ key: 'one', value }))
        break
      case 3:
        dispatch(setTransfers({ key: 'two', value }))
        break
      case 4:
        dispatch(setTransfers({ key: 'three', value }))
        break
      default:
    }
  },
})

const TransfersFilterCheckboxSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxSet)

export default TransfersFilterCheckboxSet
