import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import theme from '../../styles/theme'

import { renderWithTheme } from '../../utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>NoteTest</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 50rem;
        margin: 0 auto;
      }

      <div
        class="c0"
      >
        <span>
          NoteTest
        </span>
      </div>
    `)
  })
})
