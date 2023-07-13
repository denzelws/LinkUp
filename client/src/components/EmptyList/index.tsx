import emptyBox from '../../public/img/emptybox.svg'

import * as S from './styles'

export const EmptyList = () => {
  return (
    <S.EmptyContainer>
      <img src={emptyBox} alt="Uma ilustração demonstrando uma caixa vazia" />
      <S.EmptyText>
        Você ainda não tem nenhum contato cadastrado! Clique <br /> no botão
        <strong> "Novo Contato"</strong> à cima para cadastrar o seu primeiro!
      </S.EmptyText>
    </S.EmptyContainer>
  )
}
