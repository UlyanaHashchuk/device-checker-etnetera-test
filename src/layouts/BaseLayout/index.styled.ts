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

  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
