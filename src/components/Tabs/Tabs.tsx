import React from 'react'
import classNames from 'classnames'

import classes from './Tabs.module.scss'

interface Props {
  className?: string
  radioName: string
  options: { id: number; value: string; text: string }[]
  value: number
  onChange: (id: number) => void
}

const Tabs: React.FC<Props> = ({
  className,
  radioName,
  options,
  value,
  onChange,
}) => {
  const tabElemets = options.map((option) => (
    <li className={classes.item} key={option.id}>
      <input
        className={classes.input}
        id={`${radioName}-${option.value}`}
        type="radio"
        name={radioName}
        value={option.value}
        checked={option.id === value}
        onChange={() => onChange(option.id)}
      />
      <label className={classes.label} htmlFor={`${radioName}-${option.value}`}>
        <span className={classes.text}>{option.text}</span>
      </label>
    </li>
  ))

  return <ul className={classNames(className, classes.list)}>{tabElemets}</ul>
}

Tabs.defaultProps = {
  className: '',
}

export default Tabs
