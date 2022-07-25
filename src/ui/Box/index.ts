import styled, { css } from 'styled-components'

const Box = styled.div`
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${({ theme: { color } }) => css`
    background-color: ${color.white.base};
  `}
`

export default Box
