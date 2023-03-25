import { render, screen } from '@testing-library/react'

import 'match-media-mock'
import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    render(
      <Slider settings={{ slidesToShow: 3, vertical: true }}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 3/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })
})
