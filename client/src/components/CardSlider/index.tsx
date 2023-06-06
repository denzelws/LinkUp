import Card, { CardProps } from '../Card'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type CardSliderProps = {
  contacts: CardProps[]
}

const settings: SliderSettings = {
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 3
}

const CardSlider = ({ contacts }: CardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {contacts.map((contact) => (
        <Card key={contact.id} {...contact} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardSlider
