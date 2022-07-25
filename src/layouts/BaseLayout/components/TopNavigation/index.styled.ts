import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  left: 0;

  ${({ theme: { color, zIndex } }) => css`
    background-color: ${color.primary.base};
    z-index: ${zIndex.primary};
  `}
`

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
  }
`
