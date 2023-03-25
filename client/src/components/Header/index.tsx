import { Search } from '@styled-icons/material-outlined'
import TextField from '../TextField'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo>
      Note<span>Pad</span>
    </S.Logo>
    <TextField placeholder="Pesquisar contato..." icon={<Search />} />
  </S.Wrapper>
)

export default Header
