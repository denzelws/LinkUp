import { Search } from '@styled-icons/material-outlined'
import TextField from '../TextField'

import * as S from './styles'

export type HeaderProps = {
  withoutInput?: boolean
}

const Header = ({ withoutInput }: HeaderProps) => (
  <S.Wrapper>
    <S.Logo>
      Note<span>Pad</span>
    </S.Logo>

    {!withoutInput && (
      <TextField placeholder="Pesquisar contato..." icon={<Search />} />
    )}
  </S.Wrapper>
)

export default Header
