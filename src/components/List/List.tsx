import React from 'react'
import classNames from 'classnames'

import type { TicketData } from '../../model/types'
import Ticket from '../Ticket'

import classes from './List.module.scss'

interface Props {
  className?: string
  tickets: TicketData[]
}

const List: React.FC<Props> = ({ className, tickets }) => {
  const ticketElements = tickets.map((ticket) => (
    <li className={classes.item}>
      <Ticket data={ticket} />
    </li>
  ))

  return (
    <ul className={classNames(className, classes.list)}>{ticketElements}</ul>
  )
}

List.defaultProps = {
  className: '',
}

export default List
