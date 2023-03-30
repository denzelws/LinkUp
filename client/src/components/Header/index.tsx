import { Search } from '@styled-icons/material-outlined'
import Loader from '../Loader'
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
    <Loader />

    {!withoutInput && (
      <TextField placeholder="Pesquisar contato..." icon={<Search />} />
    )}
  </S.Wrapper>
)

export default Header
