import { useRef } from 'react'

import { Container } from '../../components/Container'
import { CardProps } from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

import { toast } from '../../utils/toast'
import contactsService from '../../services/ContactsService'

const NewContact = () => {
  const contactFormRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (contact: CardProps): Promise<void> => {
    try {
      await contactsService.createContact(contact)

      contactFormRef.current?.resetFields()

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
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default NewContact
