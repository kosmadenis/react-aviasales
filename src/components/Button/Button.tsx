import React from 'react'
import classNames from 'classnames'

import Spinner from '../Spinner'

import classes from './Button.module.scss'

interface Props {
  className?: string
  loading?: boolean
  onClick?: () => void
  text: string
}

const Button: React.FC<Props> = ({ className, loading, onClick, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(className, classes.button)}
    >
      {loading ? <Spinner className={classes.spinner} /> : text}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  loading: false,
  onClick: () => {},
}

export default Button
