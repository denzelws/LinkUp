import styled, { css, keyframes } from 'styled-components'
import { ToastMessageProps } from '.'

type ContainerProps = Pick<ToastMessageProps, 'type' | 'isLeaving'>

const messageIn = keyframes`
 from {
  opacity: 0;
  transform: translateY(100px);
 }

 to {
  opacity: 1;
  transform: translateY(0px);
 }
`

const messageOut = keyframes`
 from {
  opacity: 1;
  transform: translateY(0px);
 }

 to {
  opacity: 0;
  transform: translateY(100px);
 }
`

export const Container = styled.div<ContainerProps>`
  ${({ theme, type, isLeaving }) => css`
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
    animation: ${messageIn} 0.3s;
    cursor: pointer;

    ${isLeaving &&
    css`
      animation: ${messageOut} 0.2s;
    `}

    & + & {
      margin-top: 1.2rem;
    }

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
