import Button from '../../components/Button'
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
    <Button>Salvar alterações</Button>
    <Button disabled>Salvar alterações</Button>
  </Container>
)

export default NewContact
