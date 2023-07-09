import Card, { CardProps } from '../Card'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type CardSliderProps = {
  contacts: CardProps[]
  onDeleteContact: (contactId: string) => void
}

const settings: SliderSettings = {
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  touchMove: true,
  slidesToShow: 3,
  slidesToScroll: 3
}

const CardSlider = ({ contacts, onDeleteContact }: CardSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {contacts.map((contact) => (
          <Card key={contact.id} {...contact} onDelete={onDeleteContact} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default CardSlider
