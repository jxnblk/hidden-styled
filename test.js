import test from 'ava'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createElement as h } from 'react'
import { create as render } from 'react-test-renderer'
import Hide from './src/Hide'

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

test('breakpoints can be configured with theme', t => {
  const json = render(
    <ThemeProvider theme={{
      breakpoints: [
        24,
        36,
        48,
        96
      ]
    }}>
      <Hide xs />
    </ThemeProvider>
  ).toJSON()
  t.snapshot(json)
})
