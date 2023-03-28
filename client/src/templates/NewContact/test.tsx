import { render, screen } from '@testing-library/react'

import NewContact from '.'

describe('<NewContact />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewContact />)

    expect(screen.getByRole('heading', { name: /NewContact/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
