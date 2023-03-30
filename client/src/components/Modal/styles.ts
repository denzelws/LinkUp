import styled, { css } from 'styled-components'

export const OverlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  position: absolute;
  z-index: 30;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 45rem;
    background: ${theme.colors.white};
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.small};
  `}
`

export const ButtonBox = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.medium};

    button {
      margin-left: ${theme.spacings.xxsmall};
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
  `}
`

export const Title = styled.h1`
  font-size: 2.2rem;
`

export const WarningText = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`
