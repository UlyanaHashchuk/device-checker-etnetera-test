import styled, { css } from 'styled-components'

const Box = styled.div<{
  secondary?: boolean
}>`
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  ${({ theme: { color }, secondary }) => css`
    background-color: ${color.white.base};
    border: ${color.white[200]};

    ${secondary &&
    css`
      padding: 0;
    `}
  `}
`

export default Box
