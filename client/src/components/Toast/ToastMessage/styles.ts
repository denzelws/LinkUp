import styled, { css } from 'styled-components'
import { ToastMessageProps } from '.'

type ContainerProps = Pick<ToastMessageProps, 'type'>

export const Container = styled.div<ContainerProps>`
  ${({ theme, type }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background: ${type === 'danger'
      ? theme.colors.danger.main
      : type === 'success'
      ? theme.colors.success.main
      : theme.colors.primaryMain};
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    box-shadow: 0 2rem 2rem -1.6rem rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
      margin-top: 1.2rem;
    }

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
