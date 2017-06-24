import test from 'ava'
import { ThemeProvider } from 'styled-components'
import { createElement as h } from 'react'
import { create as render } from 'react-test-renderer'
import Hide, {
  breakpoints,
  hidden,
  xs,
  sm,
  md,
  lg
} from './src/Hide'

test('renders', t => {
  const json = render(h(Hide)).toJSON()
  t.snapshot(json)
})

test('renders with xs', t => {
  const json = render(h(Hide, { xs: true })).toJSON()
  t.snapshot(json)
})

test('renders with sm', t => {
  const json = render(h(Hide, { sm: true })).toJSON()
  t.snapshot(json)
})

test('renders with md', t => {
  const json = render(h(Hide, { md: true })).toJSON()
  t.snapshot(json)
})

test('renders with lg', t => {
  const json = render(h(Hide, { lg: true })).toJSON()
  t.snapshot(json)
})

test('hidden returns a function', t => {
  t.is(typeof hidden('foo'), 'function')
})

test('hidden function returns a style object', t => {
  const a = hidden('sm')({ sm: true })
  t.is(typeof a, 'object')
  t.deepEqual(a, {
    [breakpoints.sm]: {
      display: 'none'
    }
  })
})

test('xs returns a style object', t => {
  const a = xs({ xs: true })
  t.deepEqual(a, {
    [breakpoints.xs]: {
      display: 'none'
    }
  })
})

test('sm returns a style object', t => {
  const a = sm({ sm: true })
  t.deepEqual(a, {
    [breakpoints.sm]: {
      display: 'none'
    }
  })
})

test('md returns a style object', t => {
  const a = md({ md: true })
  t.deepEqual(a, {
    [breakpoints.md]: {
      display: 'none'
    }
  })
})

test('lg returns a style object', t => {
  const a = lg({ lg: true })
  t.deepEqual(a, {
    [breakpoints.lg]: {
      display: 'none'
    }
  })
})

test.todo('breakpoints can be configured with theme')
