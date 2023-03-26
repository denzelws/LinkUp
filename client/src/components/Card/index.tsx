import { Edit } from '@styled-icons/boxicons-solid'
import { Trash } from '@styled-icons/octicons'

import * as S from './styles'

export type CardProps = {
  name: string
  platform: string
  email: string
  phone: string
}

const Card = ({ email, platform, phone, name }: CardProps) => (
  <S.Wrapper>
    <S.InfoBox>
      <S.ContactName>
        <strong>{name}</strong>
        <small>{platform}</small>
      </S.ContactName>
      <span>{email}</span>
      <span>{phone}</span>
    </S.InfoBox>

    <S.Actions>
      <S.EditButton>
        <Edit aria-label="Edit contact" />
      </S.EditButton>
      <S.DeleteButton>
        <Trash aria-label="Delete contact" />
      </S.DeleteButton>
    </S.Actions>
  </S.Wrapper>
)

export default Card
