import styled from 'styled-components'

const breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
}

const hidden = key => props => props[key] ? {
  [breakpoints[key]]: {
    display: 'none'
  }
} : null

const xs = hidden('xs')
const sm = hidden('sm')
const md = hidden('md')
const lg = hidden('lg')

const Hide = styled([],
  xs,
  sm,
  md,
  lg
)

export default Hide
