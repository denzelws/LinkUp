import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

const EditContact = () => (
  <Container>
    <PageHeader title="Editar Contato" />
    <ContactForm buttonLabel="Salvar alterações" />
  </Container>
)

export default EditContact
