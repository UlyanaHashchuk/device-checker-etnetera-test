import { createGlobalStyle, css } from 'styled-components'
import { Theme } from '~/ui'

type Props = {
  theme: typeof Theme
}

const GlobalStyles = createGlobalStyle`
  html {
    height: ${`-webkit-fill-available`};
  }
  
  body {
    font-size: 16px;
    scroll-behavior: unset;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &, & > div {
      height: 100%;
    }
    
    ${({ theme: { color, fontFamily } }: Props) => css`
      background-color: ${color.white[100]};
      font-family: ${fontFamily.base};
    `}
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
