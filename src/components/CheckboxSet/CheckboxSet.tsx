import React from 'react'
import classNames from 'classnames'
import { zip } from 'lodash-es'

import classes from './CheckboxSet.module.scss'

interface Option {
  id: number
  text: string
}

interface Props {
  className?: string
  title: string
  options: Option[]
  values: boolean[]
  onChange: (id: number, value: boolean) => void
}

const CheckboxSet: React.FC<Props> = ({
  className,
  title,
  options,
  values,
  onChange,
}) => {
  const optionElements = zip(options, values).map(([option, value]) => (
    <li className={classes.item} key={option?.id}>
      <label className={classes.label}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(option?.id ?? -1, e.target.checked)}
        />
        <span className={classes.text}>{option?.text}</span>
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
