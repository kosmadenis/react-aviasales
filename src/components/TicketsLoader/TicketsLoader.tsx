import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loader from '../Loader'
import Button from '../Button'
import type { AppDispatch, RootState } from '../../state'
import type { Status } from '../../state/slices/search-data'
import { fetchAllTickets } from '../../state/thunks/search-data'

import classes from './TicketsLoader.module.scss'

function getTextForStatus(status: Status, numTickets: number) {
  if (status === 'loading') {
    return 'Загружаем билеты...'
  }

  if (status === 'error' && numTickets === 0) {
    return 'Не удалось загрузить билеты'
  }

  if (status === 'error') {
    return 'Не удалось загрузить все билеты'
  }

  return null
}

interface Props {
  className?: string
  status: Status
  numTickets: number
  mappedFetchAllTickets: () => void
}

const TicketsLoader: React.FC<Props> = ({
  className,
  status,
  numTickets,
  mappedFetchAllTickets,
}) => {
  const loader =
    status !== 'loading' ? null : <Loader className={classes.loader} />

  const text = getTextForStatus(status, numTickets)

  const button =
    status !== 'error' ? null : (
      <Button
        className={classes.button}
        text="Попробовать снова"
        onClick={() => mappedFetchAllTickets()}
      />
    )

  return (
    <div className={classNames(className, classes.layout)}>
      {loader}
      <span className={classes.text}>{text}</span>
      {button}
    </div>
  )
}

TicketsLoader.defaultProps = {
  className: '',
}

const mapStateToProps = (state: RootState) => ({
  status: state.searchData.status,
  numTickets: state.searchData.tickets.length,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  mappedFetchAllTickets: () => dispatch(fetchAllTickets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketsLoader)
