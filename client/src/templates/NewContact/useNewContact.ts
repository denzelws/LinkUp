import { useRef } from 'react'

import { toast } from '../../utils/toast'
import contactsService from '../../services/ContactsService'

import { CardProps } from '../../components/Card'

export const useNewContact = () => {
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

  return {
    contactFormRef,
    handleSubmit
  }
}
