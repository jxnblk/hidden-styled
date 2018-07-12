import React from 'react'
import styled from 'styled-components'
import { display } from 'styled-system'

const withHideProps = Component => ({
  xs,
  sm,
  md,
  lg,
  xl,
  display,
  ...props
}) =>
  <Component
    {...props}
    display={display || [
      xs,
      sm,
      md,
      lg,
      xl
    ].map(n => n ? 'none' : 'block')}
  />

const Hide = styled(
  withHideProps(
    styled(({ display, ...props }) =>
      <div {...props} />
    )([], display)
  )
)([])

export default Hide
