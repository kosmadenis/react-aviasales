import React from 'react'
import classNames from 'classnames'
import { addMinutes, format } from 'date-fns'

import classes from './Segment.module.scss'

function getTransferWordForm(n: number) {
  if (n >= 10 && n <= 19) {
    return 'пересадок'
  }

  switch (n % 10) {
    case 1:
      return 'пересадка'
    case 2:
    case 3:
    case 4:
      return 'пересадки'
    default:
      return 'персадок'
  }
}

function formatDuration(totalMinutes: number) {
  if (totalMinutes < 60) {
    return 'меньше минуты'
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes - hours * 60)

  if (hours === 0) {
    return `${minutes}м`
  }

  if (minutes === 0) {
    return `${hours}ч`
  }

  return `${hours}ч ${minutes}м`
}

function formatDataFromTo(start: Date, totalMinutes: number) {
  const end = addMinutes(start, totalMinutes)

  const startText = format(start, 'H:mm')
  const endText = format(end, 'H:mm')

  return `${startText} - ${endText}`
}

interface Props {
  className?: string
  data: Model.Segment
}

const Segment: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={classNames(className, classes.segment)}>
      <div className={classes.field}>
        <span className={classes.title}>
          {data.origin} - {data.destination}
        </span>
        <span className={classes.description}>
          {formatDataFromTo(new Date(data.date), data.duration)}
        </span>
      </div>
      <div className={classes.field}>
        <span className={classes.title}>В пути</span>
        <span className={classes.description}>
          {formatDuration(data.duration)}
        </span>
      </div>
      <div className={classes.field}>
        <span className={classes.title}>
          {data.stops.length} {getTransferWordForm(data.stops.length)}
        </span>
        <span className={classes.description}>{data.stops.join(', ')}</span>
      </div>
    </div>
  )
}

Segment.defaultProps = {
  className: '',
}

export default Segment
