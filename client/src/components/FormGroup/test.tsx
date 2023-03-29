import { render, screen } from '@testing-library/react'

import FormGroup from '.'

describe('<FormGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormGroup />)

    expect(screen.getByRole('heading', { name: /FormGroup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
