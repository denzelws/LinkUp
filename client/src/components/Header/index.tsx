import { Search } from '@styled-icons/material-outlined'
import TextField from '../TextField'
import { ChangeEvent } from 'react'

import * as S from './styles'

export type HeaderProps = {
  withoutInput?: boolean
  searchTerm: string
  onChangeSearchTerm: (newSearchTerm: string) => void
}

const Header = ({
  withoutInput,
  searchTerm,
  onChangeSearchTerm
}: HeaderProps) => {
  const handleChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeSearchTerm(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.Logo>
        Link<span>Up</span>
      </S.Logo>

      {!withoutInput && (
        <TextField
          placeholder="Pesquisar contato..."
          icon={<Search />}
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}
    </S.Wrapper>
  )
}

export default Header
