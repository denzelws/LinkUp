import Card, { CardProps } from '../Card'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type CardSliderProps = {
  items: CardProps[]
}

const settings: SliderSettings = {
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 3
}

const CardSlider = ({ items }: CardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardSlider