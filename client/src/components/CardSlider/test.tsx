import 'match-media-mock'
import { screen } from '@testing-library/react'

import CardSlider from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const items = [
  {
    name: 'Denzel Washington',
    platform: 'Instagram',
    email: 'test@gmail.com',
    phone: '9999999'
  },
  {
    name: 'Marco',
    platform: 'Facebook',
    email: 'marco@gmail.com',
    phone: '222222'
  },
  {
    name: 'Johnny L',
    platform: 'Twitter',
    email: 'johnny@gmail.com',
    phone: '333333'
  }
]

describe('<CardSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })
})
