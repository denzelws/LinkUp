import { Container } from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import { CardProps } from '../../components/Card'
import contactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

const NewContact = () => {
  const handleSubmit = async (formData: CardProps): Promise<void> => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      }

      await contactsService.createContact(contact)

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!'
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!'
      })
    }
  }
  return (
    <Container>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </Container>
  )
}

export default NewContact
