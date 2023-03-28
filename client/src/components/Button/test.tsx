import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>Test button</Button>)

    expect(
      screen.getByRole('button', { name: /test button/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render disabled button', () => {
    renderWithTheme(<Button disabled>Test button</Button>)

    expect(screen.getByRole('button', { name: /test button/i })).toHaveStyle({
      background: '#ccc',
      cursor: 'default'
    })
  })
})
