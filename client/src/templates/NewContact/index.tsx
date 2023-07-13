import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

import { useNewContact } from './useNewContact'

const NewContact = () => {
  const { contactFormRef, handleSubmit } = useNewContact()
  return (
    <Container>
      <PageHeader title="Novo Contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default NewContact
