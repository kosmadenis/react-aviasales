import React from 'react'
import classNames from 'classnames'

import classes from './Button.module.scss'

interface Props {
  className?: string
  disabled?: boolean
  text: string
}

const Button: React.FC<Props> = ({ className, disabled, text }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(className, classes.button)}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  disabled: false,
}

export default Button
