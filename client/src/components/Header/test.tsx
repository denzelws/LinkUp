import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import { screen } from '@testing-library/react'

import Header from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Header />', () => {
  it('should render the header', () => {
    renderWithTheme(<Header />)
  })
})
