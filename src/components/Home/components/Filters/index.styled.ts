import styled, { css } from 'styled-components'
import { InputComponent } from '~/ui'

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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ theme: { media } }) => css`
    margin-top: 14px;

    @media only screen and (min-width: ${media.md}px) {
      width: 280px;
      margin-top: 0;
    }
  `}
`

export const SearchInput = styled(InputComponent)`
  margin-left: 8px;

  ${({ theme: { color } }) => css`
    background-color: ${color.transparent};

    &::placeholder {
      color: ${color.black[200]};
    }
  `}
`
