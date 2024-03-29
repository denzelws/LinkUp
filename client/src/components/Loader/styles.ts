import styled, { css, keyframes } from 'styled-components'

type WrapperProps = {
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

export const Wrapper = styled.main<WrapperProps>`
  ${({ isLeaving }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    background: rgba(246, 245, 252, 0.7);
    animation: ${fadeIn} 0.3s forwards;

    ${isLeaving &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
  `}
`
