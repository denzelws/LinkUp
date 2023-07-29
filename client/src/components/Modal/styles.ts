import styled, { css, keyframes } from 'styled-components'
import { ModalProps } from '.'

import { darken } from 'polished'

type ModalStyleProps = {
  isLeaving: boolean
}

const fadeIn = keyframes`
from {
 opacity: 0;
}

to {
opacity: 1;
}
`

const fadeOut = keyframes`
from { opacity: 1; }
to { opacity: 0; }
`

const scaleIn = keyframes`
from {
  transform: scale(0)
}

to {
  transform: scale(1)
}
`

const scaleOut = keyframes`
from { transform: scale(1); }
to { transform: scale(0); }
`

export const OverlayBox = styled.div<ModalStyleProps>`
  ${({ isLeaving }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn}, 0.3s forwards;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5rem);
    position: fixed;
    z-index: 30;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    ${isLeaving &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
  `}
`

export const ModalContainer = styled.div<ModalStyleProps>`
  ${({ theme, isLeaving }) => css`
    width: 100%;
    max-width: 45rem;
    background: ${theme.colors.white};
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.small};
    animation: ${scaleIn} 0.3s;

    ${isLeaving &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `}
  `}
`

export const ButtonBox = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.medium};

    button {
      margin-left: ${theme.spacings.small};
    }
  `}
`

export const CancelButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  `}
`

export const Title = styled.h1<Pick<ModalProps, 'danger'>>`
  ${({ theme, danger }) => css`
    font-size: 2.2rem;
    color: ${danger
      ? theme.colors.danger.main
      : darken(0.4, theme.colors.gray)};
  `}
`

export const WarningText = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
