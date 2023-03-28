import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'

import * as S from './styles'

const NewContact = () => (
  <Container>
    <PageHeader title="Novo Contato" />
    <S.Input type="text" placeholder="Nome" />
    <S.Select>
      <option value="123">Instagram</option>
    </S.Select>
    <button>Salvar</button>
  </Container>
)

export default NewContact
