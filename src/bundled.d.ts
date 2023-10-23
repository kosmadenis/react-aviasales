declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export { ReactComponent }
}

declare module '*.png' {
  const value: string
  export default value
}
