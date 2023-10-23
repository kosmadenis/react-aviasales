import { connect } from 'react-redux'

import CheckboxSet from '../CheckboxSet'
import type { AppDispatch, RootState } from '../../state'
import {
  setAll,
  setNone,
  setOne,
  setThree,
  setTwo,
} from '../../state/slices/transfers-filter'

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
    state.transfersFilter.all,
    state.transfersFilter.none,
    state.transfersFilter.one,
    state.transfersFilter.two,
    state.transfersFilter.three,
  ],
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (id: number, value: boolean) => {
    switch (id) {
      case 0:
        dispatch(setAll(value))
        break
      case 1:
        dispatch(setNone(value))
        break
      case 2:
        dispatch(setOne(value))
        break
      case 3:
        dispatch(setTwo(value))
        break
      case 4:
        dispatch(setThree(value))
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
