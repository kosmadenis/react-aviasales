import React from 'react'
import classNames from 'classnames'

import classes from './Button.module.scss'

interface Props {
  className?: string
  text: string
}

const Button: React.FC<Props> = ({ className, text }) => {
  return (
    <button type="button" className={classNames(className, classes.button)}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

export default Button
