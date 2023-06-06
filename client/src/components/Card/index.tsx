import { Edit } from '@styled-icons/boxicons-solid'
import { Trash } from '@styled-icons/octicons'
import { Link } from 'react-router-dom'

import * as S from './styles'

export type CardProps = {
  id: string
  name: string
  platform: string
  email: string
  phone: string
}

const Card = ({ email, platform, phone, name, id }: CardProps) => (
  <S.Wrapper>
    <S.InfoBox>
      <S.ContactName>
        <strong>{name}</strong>
        {platform && <small>{platform}</small>}
      </S.ContactName>
      <span>{email}</span>
      <span>{phone}</span>
    </S.InfoBox>

    <S.Actions>
      <Link to={`/edit/${id}`}>
        <S.EditButton>
          <Edit aria-label="Edit contact" />
        </S.EditButton>
      </Link>
      <S.DeleteButton>
        <Trash aria-label="Delete contact" />
      </S.DeleteButton>
    </S.Actions>
  </S.Wrapper>
)

export default Card
