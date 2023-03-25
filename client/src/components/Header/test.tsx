import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import { screen } from '@testing-library/react'

import Header from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Header />', () => {
  it('should render the header', () => {
    renderWithTheme(<Header />)

    const logoText = screen
      .getByRole('heading', { level: 1 })
      .querySelector('span')
    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveTextContent('Pad')

    expect(
      screen.getByPlaceholderText(/pesquisar contato/i)
    ).toBeInTheDocument()
  })
})
