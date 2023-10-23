import React from 'react'
import { connect } from 'react-redux'

import type { RootState } from '../../state'
import Ticket from '../Ticket'
import Button from '../Button'

import classes from './TicketList.module.scss'

interface Props {
  className?: string
  data: Model.Response
}

const TicketList: React.FC<Props> = ({ className, data }) => {
  const ticketElements = data.tickets.map((ticket) => (
    <li className={classes.item}>
      <Ticket data={ticket} />
    </li>
  ))

  const button = data.stop ? null : (
    <Button
      className={classes.button}
      disabled={data.stop}
      text="Показать еще 5 билетов!"
    />
  )

  return (
    <div className={className}>
      <ul className={classes.list}>{ticketElements}</ul>
      {button}
    </div>
  )
}

TicketList.defaultProps = {
  className: '',
}

const mapStateToProps = (state: RootState) => ({
  data: state.ticketList,
})

export default connect(mapStateToProps)(TicketList)
