import React from 'react'

import TransfersCheckboxSet from '../TransfersFilterCheckboxSet'
import TicketSortTabs from '../TicketSortTabs'
import TicketList from '../TicketList'

import classes from './App.module.scss'
import { ReactComponent as Logo } from './logo.svg'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className={classes.layout}>
      <Logo className={classes.logo} />
      <TransfersCheckboxSet className={classes.transfers} />
      <TicketSortTabs className={classes.sort} radioName="app-ticket-sort" />
      <TicketList className={classes.tickets} />
    </div>
  )
}

export default App
