import React from 'react'
import classNames from 'classnames'

import classes from './Loader.module.scss'

interface Props {
  className?: string
}

const Loader: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 4"
      preserveAspectRatio="none"
      className={classNames(className, classes.svg)}
    >
      <line
        x1="0%"
        y1="50%"
        x2="100%"
        y2="50%"
        pathLength={25}
        strokeDasharray={1}
        className={classes.line}
      />
    </svg>
  )
}

Loader.defaultProps = {
  className: '',
}

export default Loader
