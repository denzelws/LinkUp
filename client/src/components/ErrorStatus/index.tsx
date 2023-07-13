import sadImage from '../../public/img/sad.svg'
import Button from '../Button'

import * as S from './styles'

type ErrorStatusProps = {
  onTryAgain: () => void
}

export const ErrorStatus = ({ onTryAgain }: ErrorStatusProps) => {
  return (
    <S.Container>
      <img src={sadImage} alt="Uma imagem mostrando uma cara triste" />
      <S.InfoBox>
        <S.WarningText>Ocorreu um erro ao obter seus contatos</S.WarningText>
        <Button onClick={onTryAgain}>Tentar novamente</Button>
      </S.InfoBox>
    </S.Container>
  )
}
