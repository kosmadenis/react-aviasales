import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button'
import Ticket from '../Ticket'
import TicketsLoader from '../TicketsLoader'
import type { AppDispatch, RootState } from '../../state'
import { type Status } from '../../state/slices/search-data'
import type { FilterMap, SortValue } from '../../state/slices/search-params'
import { fetchAllTickets } from '../../state/thunks/search-data'

import classes from './TicketList.module.scss'

const NUM_TICKETS_PER_BATCH = 5

interface Props {
  className?: string

  sort: SortValue
  filter: FilterMap
  status: Status
  tickets: Model.Ticket[]
  mappedFetchAllTickets: () => void
}

const calcTicketDuration = (ticket: Model.Ticket) =>
  ticket.segments.reduce((sum, seg) => sum + seg.duration, 0)

const calcTicketTransfers = (ticket: Model.Ticket) =>
  ticket.segments.map((seg) => seg.stops.length)

const sortPrice = (a: Model.Ticket, b: Model.Ticket) => a.price - b.price

const sortDuration = (a: Model.Ticket, b: Model.Ticket) =>
  calcTicketDuration(a) - calcTicketDuration(b)

const filterTransfers = (filter: FilterMap) => (ticket: Model.Ticket) => {
  if (filter.all) {
    return true
  }

  const numTransfersPerSegment = calcTicketTransfers(ticket)

  return numTransfersPerSegment.every(
    (numTransfers) =>
      (filter.none && numTransfers === 0) ||
      (filter.one && numTransfers === 1) ||
      (filter.two && numTransfers === 2) ||
      (filter.three && numTransfers === 3)
  )
}

const TicketList: React.FC<Props> = ({
  className,
  sort,
  filter,
  status,
  tickets,
  mappedFetchAllTickets,
}) => {
  const [numTickets, setNumTickets] = React.useState(NUM_TICKETS_PER_BATCH)

  const displayedTickets = React.useMemo(() => {
    let cmpFn

    switch (sort) {
      case 'cheapest':
        cmpFn = sortPrice
        break
      case 'fastest':
        cmpFn = sortDuration
        break
      default:
    }

    const filtered = tickets.filter(filterTransfers(filter))
    const sorted = cmpFn ? filtered.toSorted(cmpFn) : filtered
    const limited = sorted.slice(0, numTickets)

    return limited
  }, [tickets, numTickets, sort, filter])

  React.useEffect(() => {
    mappedFetchAllTickets()
  }, [mappedFetchAllTickets])

  const loaderBox =
    status !== 'loading' && status !== 'error' ? null : (
      <TicketsLoader className={classes['loader-box']} />
    )

  const list =
    displayedTickets.length === 0 ? null : (
      <ul className={classes.list}>
        {displayedTickets.map((ticket) => (
          <li key={ticket.id} className={classes.item}>
            <Ticket data={ticket} />
          </li>
        ))}
      </ul>
    )

  const button =
    displayedTickets.length === 0 ||
    (numTickets >= tickets.length && status !== 'loading') ? null : (
      <Button
        className={classes.button}
        loading={status === 'loading' && numTickets > tickets.length}
        onClick={() => setNumTickets((n) => n + NUM_TICKETS_PER_BATCH)}
        text={`Показать еще ${NUM_TICKETS_PER_BATCH} билетов!`}
      />
    )

  const emptyListMessage =
    displayedTickets.length === 0 && tickets.length > 0 ? (
      <span className={classes['empty-list-message']}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </span>
    ) : null

  return (
    <div className={className}>
      {loaderBox}
      {list}
      {button}
      {emptyListMessage}
    </div>
  )
}

TicketList.defaultProps = {
  className: '',
}

const mapStateToProps = (state: RootState) => ({
  sort: state.searchParams.sort,
  filter: state.searchParams.transfers,
  status: state.searchData.status,
  tickets: state.searchData.tickets,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  mappedFetchAllTickets: () => dispatch(fetchAllTickets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
