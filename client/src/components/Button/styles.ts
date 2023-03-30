import styled, { css, DefaultTheme } from 'styled-components'

import { lighten, darken } from 'polished'
import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size' | 'danger'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.xsmall};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, danger }) => css`
    height: 5.2rem;
    border: none;
    background: #5061fc;
    font-size: ${theme.font.sizes.medium};
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #fff;
    border-radius: 0.4rem;
    transition: background 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background: ${lighten(0.2, '#5061fc')};
    }

    &:active {
      background: ${darken(0.1, '#5061fc')};
    }

    &[disabled] {
      background: #ccc;
      cursor: default;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!danger && wrapperModifiers.danger(theme)}
  `}
`
