import { Link } from 'react-router-dom'

import { Container } from '../Container'
import Header from '../Header'
import * as S from './styles'

export type PageHeaderProps = {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => (
  <Container>
    <Header withoutInput />
    <S.IconWrapper>
      <Link to="/">
        <S.ArrowIcon />
        <span>Voltar</span>
      </Link>
    </S.IconWrapper>
    <S.Title>{title}</S.Title>
  </Container>
)

export default PageHeader
