import styled, { css } from 'styled-components'
import { ContactFormProps } from '../../components/ContactForm'

export const Wrapper = styled.main``

export const Input = styled.input<Pick<ContactFormProps, 'error'>>`
  ${({ theme, error }) => css`
    width: 100%;
    background: #fff;
    border: none;
    height: 5.2rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    outline: none;
    border-radius: 0.4rem;
    border: 0.2rem solid #fff;
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    transition: border-color 0.2s ease-in-out;
    color: ${error && theme.colors.danger.main};
    border-color: ${error && theme.colors.danger.main} !important;
    appearance: none;

    &:focus {
      border-color: #5061fc;
    }
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    background: #fff;
    border: none;
    height: 5.2rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    outline: none;
    border-radius: 0.4rem;
    border: 0.2rem solid #fff;
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    transition: border-color 0.2s ease-in-out;
    font-family: ${theme.font.family};
    appearance: none;

    &:focus {
      border-color: #5061fc;
    }
  `}
`
