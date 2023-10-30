import React from 'react'
import classNames from 'classnames'

import classes from './Ticket.module.scss'
import Segment from './Segement'

interface Props {
  className?: string
  data: Model.Ticket
}

const Ticket: React.FC<Props> = ({ className, data }) => {
  const segments = data.segments.map((segment) => (
    <Segment key={segment.id} data={segment} />
  ))

  const price = data.price.toLocaleString('ru-RU')

  const logoSrc = `https://pics.avs.io/99/36/${data.carrier}.png`

  return (
    <div className={classNames(className, classes.ticket)}>
      <span className={classes.price}>{price} Р</span>
      <img className={classes.logo} src={logoSrc} alt="Carrier logo" />
      <div className={classes.clearfix} />
      <div className={classes.segments}>{segments}</div>
    </div>
  )
}

Ticket.defaultProps = {
  className: '',
}

export default Ticket
