import React from 'react'
import classNames from 'classnames'

import classes from './CheckboxSet.module.scss'

interface Props {
  className?: string
  title: string
  options: { id: number; text: string }[]
}

const CheckboxSet: React.FC<Props> = ({ className, title, options }) => {
  const optionElements = options.map((option) => (
    <li className={classes.item} key={option.id}>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox" />
        <span className={classes.text}>{option.text}</span>
      </label>
    </li>
  ))

  return (
    <div className={classNames(className, classes.layout)}>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes.list}>{optionElements}</ul>
    </div>
  )
}

CheckboxSet.defaultProps = {
  className: '',
}

export default CheckboxSet
