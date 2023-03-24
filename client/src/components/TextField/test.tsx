import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import { render, screen } from '@testing-library/react'

import TextField from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<TextField />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextField />)
  })
})
