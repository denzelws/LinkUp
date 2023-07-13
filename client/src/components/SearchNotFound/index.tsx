import questionQuery from '../../public/img/query.svg'

export type SearchNotFoundProps = {
  searchTerm: string
}

import * as S from './styles'

export const SearchNotFound = ({ searchTerm }: SearchNotFoundProps) => {
  return (
    <S.NotFoundContainer>
      <S.ImageWrapper>
        <img
          src={questionQuery}
          alt="A imagem mostra um icone de pesquisa com um ponto de interrogação"
        />
      </S.ImageWrapper>
      <S.NotFoundMessage>
        Nao foi encontrado resultados para <strong>{searchTerm}</strong>
      </S.NotFoundMessage>
    </S.NotFoundContainer>
  )
}
