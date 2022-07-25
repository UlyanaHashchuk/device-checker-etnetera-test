import styled, { css } from 'styled-components'

type Props = Partial<{
  // colors
  blackBase: boolean
  whiteBase: boolean
  secondary: boolean
  // sizes
  xSmall: boolean
  small: boolean
  regular: boolean
  middle: boolean
  large: boolean
  // others
  centered: boolean
  uppercase: boolean
  inline: boolean
  truncate: boolean
}>

const Text = styled.p<Props>`
  ${({ theme: { color }, ...props }) => css`
    color: inherit;

    // colors
    ${props.blackBase &&
    css`
      color: ${color.black.base};
    `}

    ${props.whiteBase &&
    css`
      color: ${color.white.base};
    `}

    ${props.secondary &&
    css`
      color: ${color.black[300]};
    `}
   
    // sizes
    ${props.xSmall &&
    css`
      font-size: 0.75rem; //12px
    `}
    
    ${props.small &&
    css`
      font-size: 0.875rem; //14px
    `}
    
    ${props.regular &&
    css`
      font-size: 1rem; //16px
    `}

    ${props.middle &&
    css`
      font-size: 1.125rem; //18px
    `}

    ${props.large &&
    css`
      font-size: 1.5rem; //24px
    `}
    
    // others
    ${props.centered &&
    css`
      text-align: center;
    `}
    
    ${props.uppercase &&
    css`
      text-transform: uppercase;
    `}
    
    ${props.inline &&
    css`
      display: inline-block;
    `}
    
    ${props.truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
  `}
`

export default Text
