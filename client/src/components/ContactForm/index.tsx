/* eslint-disable react/display-name */
import { forwardRef } from 'react'

import { CardProps } from '../Card'
import FormGroup from '../FormGroup'
import Button from '../Button'

import { Input, Select } from '../../templates/NewContact/styles'

import * as S from './styles'
import { useContactForm } from './useContactForm'

export type ContactFormProps = {
  buttonLabel: string
  error?: boolean
  onSubmit: (formData: CardProps) => Promise<void>
}

const ContactForm = forwardRef(
  ({ buttonLabel, onSubmit }: ContactFormProps, ref) => {
    const {
      handleSubmit,
      getErrorMessageByFieldName,
      handleNameChange,
      name,
      email,
      phone,
      handlePhoneChange,
      handleEmailChange,
      isLoadingCategories,
      categoryId,
      setCategoryId,
      categories,
      isFormValid,
      isSubmitting
    } = useContactForm({ onSubmit, buttonLabel }, ref)

    return (
      <S.WrapperForm onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="Nome"
            error={!!getErrorMessageByFieldName('name')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            error={!!getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <FormGroup>
          <Input
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Telefone"
            maxLength={15}
          />
        </FormGroup>

        <FormGroup isLoading={isLoadingCategories}>
          <Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            disabled={isLoadingCategories}
          >
            <option value="">Sem categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <S.ButtonContainer>
          <Button
            size="fullWidth"
            disabled={!isFormValid}
            isLoading={isSubmitting}
          >
            {buttonLabel}
          </Button>
        </S.ButtonContainer>
      </S.WrapperForm>
    )
  }
)

export default ContactForm
