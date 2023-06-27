import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import { CardProps } from '../../components/Card'
import contactsService from '../../services/ContactsService'

const NewContact = () => {
  const handleSubmit = async (formData: CardProps) => {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.categoryId
    }

    const response = await contactsService.createContact(contact)
    console.log(response)
  }
  return (
    <Container>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </Container>
  )
}

export default NewContact
