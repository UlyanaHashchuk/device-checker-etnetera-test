import styled, { css } from 'styled-components'
import { Text } from '~/ui'

export const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
`

export const ImageOverlayText = styled(Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;

  ${({ theme: { color } }) => css`
    color: ${color.white.base};
    background-color: rgba(59, 59, 59, 0.9);
  `}
`

export const Image = styled.img`
  height: 100%;
`
