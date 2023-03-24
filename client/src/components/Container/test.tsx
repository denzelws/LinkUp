import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Container />)
  })
})
