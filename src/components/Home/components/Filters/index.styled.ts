import styled, { css } from 'styled-components'

type Props = {
  secondary?: boolean
}

export const Wrapper = styled.div<Props>`
  width: 100%;

  ${({ theme: { media }, secondary }) => css`
    ${secondary &&
    css`
      margin-top: 14px;

      @media only screen and (min-width: ${media.md}px) {
        margin: 0 0 0 40px;
      }
    `}
  `}
`

export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  ${({ theme: { media }, secondary }) => css`
    @media only screen and (min-width: ${media.md}px) {
      flex-direction: row;
      align-items: flex-end;

      ${secondary &&
      css`
        justify-content: space-between;
      `}
    }
  `}
`
