import { screen } from '@testing-library/react'

import Card from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  name: 'Test name',
  platform: 'instagram',
  email: 'test@mail.com',
  phone: '99999'
}

describe('<Card />', () => {
  it('should render the card', () => {
    renderWithTheme(<Card {...props} />)

    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(props.platform)).toBeInTheDocument()
    expect(screen.getByText(props.email)).toBeInTheDocument()
    expect(screen.getByText(props.phone)).toBeInTheDocument()
  })

  it('should render with icons (edit/delete)', () => {
    renderWithTheme(<Card {...props} />)

    expect(screen.getByLabelText(/edit contact/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/delete contact/i)).toBeInTheDocument()
  })
})
