import React from 'react'

import type { TicketData } from '../../model/types'
import CheckboxSet from '../CheckboxSet'
import Tabs from '../Tabs'
import List from '../List'
import Button from '../Button'

import classes from './App.module.scss'
import { ReactComponent as Logo } from './logo.svg'

interface Props {}

const TRANSFER_TITLE = 'Количество пересадок'

const TRANSFER_OPTIONS = [
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

const SORT_OPTIONS = [
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

const TICKETS: TicketData[] = Array.prototype.fill.call(new Array(5), {
  price: 13400,
  carrier: 'S7',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: new Date('2023-10-04T07:45:00.000Z'),
      duration: 1275,
      stops: ['HKG', 'JNB'],
    },
    {
      origin: 'MOW',
      destination: 'HKT',
      date: new Date('2023-10-04T08:20:00.000Z'),
      duration: 810,
      stops: ['HKG'],
    },
  ],
})

const App: React.FC<Props> = () => {
  return (
    <div className={classes.layout}>
      <Logo className={classes.logo} />
      <div className={classes.transfers}>
        <CheckboxSet title={TRANSFER_TITLE} options={TRANSFER_OPTIONS} />
      </div>
      <Tabs
        className={classes.sort}
        radioName="app-sort"
        options={SORT_OPTIONS}
      />
      <List className={classes.cards} tickets={TICKETS} />
      <Button className={classes.more} text="Показать еще 5 билетов!" />
    </div>
  )
}

export default App
