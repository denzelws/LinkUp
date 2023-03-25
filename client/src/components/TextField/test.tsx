import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import { screen } from '@testing-library/react'

import TextField from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Search } from '@styled-icons/material-outlined'

describe('<TextField />', () => {
  it('should render with placeholder ', () => {
    renderWithTheme(<TextField placeholder="text" />)

    expect(screen.getByPlaceholderText(/text/i)).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Search data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })
})
