import { screen } from '@testing-library/react'

import ContactsList from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<ContactsList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ContactsList />)

    expect(
      screen.getByRole('heading', { name: /3 contatos/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /novo contato/i })
    ).toBeInTheDocument()
  })
})
