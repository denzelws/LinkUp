import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

const NewContact = () => (
  <Container>
    <PageHeader title="Novo Contato" />
    <ContactForm buttonLabel="Cadastrar" />
  </Container>
)

export default NewContact
