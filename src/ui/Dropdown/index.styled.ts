import styled, { css } from 'styled-components'
import { BaseButton } from '~/ui'

export const Container = styled.div<{
  secondary?: boolean
}>`
  position: relative;
  outline: none;
  display: flex;
  align-items: center;
  width: 100%;

  ${({ theme: { media }, secondary }) => css`
    ${!secondary &&
    css`
      @media only screen and (min-width: ${media.md}px) {
        width: 165px;
      }
    `}
  `}
`

export const DropdownTrigger = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 0;
  width: 100%;

  ${({ theme: { color } }) => css`
    border-bottom: 1px solid ${color.white[200]};
  `}
`

export const Drop = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 100%;

  ${({ theme: { color, zIndex, transition } }) => css`
    z-index: ${zIndex.dropdown};
    background-color: ${color.white.base};
    border: 1px solid ${color.white[200]};
    color: ${color.black[400]};
    animation: fadeIn ${transition.forwards};

    & > * {
      padding: 10px;
      transition: ${transition.base};
    }

    & > *:hover {
      background-color: ${color.white[200]};
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`

export const Symbol = styled.span<{
  isOpened: boolean
}>`
  ${({ theme: { color, transition }, isOpened }) => css`
    color: ${color.white[200]};
    font-size: 12px;
    transition: ${transition.base};

    ${isOpened &&
    css`
      transform: rotate(-180deg);
    `};
  `}
`
