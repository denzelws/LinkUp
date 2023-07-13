import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import Loader from '../../components/Loader'

import useEditContact from '../EditContact/useEditContact'

const EditContact = () => {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useEditContact()

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default EditContact
