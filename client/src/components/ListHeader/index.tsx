import * as S from './styles'

export type ListHeaderProps = {
  orderBy: string
  handleToggleOrderBy: () => void
}

export const ListHeader = ({
  orderBy,
  handleToggleOrderBy
}: ListHeaderProps) => {
  return (
    <S.ListHeader onClick={handleToggleOrderBy}>
      Nome
      <S.ArrowIcon orderby={orderBy} />
    </S.ListHeader>
  )
}
