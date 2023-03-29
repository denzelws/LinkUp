import { render, screen } from '@testing-library/react'

import EditContact from '.'

describe('<EditContact />', () => {
  it('should render the heading', () => {
    const { container } = render(<EditContact />)

    expect(screen.getByRole('heading', { name: /EditContact/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
