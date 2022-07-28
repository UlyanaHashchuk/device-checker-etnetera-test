import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${`-webkit-fill-available`};
`

export const Content = styled.div<{
  centered: boolean
}>`
  flex: 100%;
  margin: 69px 20px 0;

  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        margin: 20px;
      }
    `}
`
