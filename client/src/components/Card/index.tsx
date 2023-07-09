import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Edit } from '@styled-icons/boxicons-solid'
import { Trash } from '@styled-icons/octicons'

import Modal from '../Modal'
import contactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

import * as S from './styles'

export type CardProps = {
  id?: string | undefined
  name: string
  category_name?: string
  categoryId?: string
  category_id?: string
  email: string
  phone: string
  onDelete?: (contactId: string) => void
}

const Card = ({
  email,
  category_name,
  phone,
  name,
  id,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDelete = () => {}
}: CardProps) => {
  const [isDeleteModalVisible, setIsModalVisible] = useState(false)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const handleDeleteModalVisible = () => {
    setIsModalVisible(true)
  }

  const handleRemoveModal = () => {
    setIsModalVisible(false)
  }

  const handleConfirmDeleteContact = async () => {
    try {
      setIsLoadingDelete(true)
      await contactsService.deleteContact(id)
      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!'
      })
      onDelete(id ?? '')
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!'
      })
    } finally {
      setIsLoadingDelete(false)
      handleRemoveModal()
    }
    console.log(id)
  }

  return (
    <S.Wrapper>
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o contato "${name}"?`}
        confirmLabel="Deletar"
        onCancel={handleRemoveModal}
        onConfirm={handleConfirmDeleteContact}
      >
        Esta ação não poderá ser desfeita!
      </Modal>
      <S.InfoBox>
        <S.ContactName>
          <strong>{name}</strong>
          {category_name && <small>{category_name}</small>}
        </S.ContactName>
        <span>{email}</span>
        <span>{phone}</span>
      </S.InfoBox>

      <S.Actions>
        <Link to={`/edit/${id}`}>
          <S.EditButton>
            <Edit aria-label="Edit contact" />
          </S.EditButton>
        </Link>
        <S.DeleteButton>
          <Trash
            aria-label="Delete contact"
            onClick={handleDeleteModalVisible}
          />
        </S.DeleteButton>
      </S.Actions>
    </S.Wrapper>
  )
}

export default Card
