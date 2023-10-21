import React from 'react'
import classNames from 'classnames'

import type { TicketData } from '../../model/types'

import classes from './Ticket.module.scss'
import Segment from './Segement'
import logo from './s7-logo.png'

interface Props {
  className?: string
  data: TicketData
}

const Ticket: React.FC<Props> = ({ className, data }) => {
  const segments = data.segments.map((segment) => <Segment data={segment} />)
  const price = data.price.toLocaleString('ru-RU')

  return (
    <div className={classNames(className, classes.ticket)}>
      <span className={classes.price}>{price} Р</span>
      <img className={classes.logo} src={logo} alt="Carrier logo" />
      <div className={classes.clearfix} />
      <div className={classes.segments}>{segments}</div>
    </div>
  )
}

Ticket.defaultProps = {
  className: '',
}

export default Ticket
