import styled, { css } from 'styled-components'

export type ButtonProps = Partial<{
  // colors
  primary: boolean
  secondary: boolean
  tertiary: boolean
  // others
  filled: boolean
  disabled: boolean
}>

export const BaseButton = styled.button<ButtonProps>`
  border: none;
  background: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme: { transition }, disabled }) => css`
    transition: opacity ${transition.base}, color ${transition.base},
      background ${transition.base}, transform ${transition.base};

    ${disabled &&
    css`
      pointer-events: none;
      cursor: auto;
    `}
  `};

  &,
  &:focus {
    outline: none;
  }
`

const Button = styled(BaseButton)<ButtonProps>`
  text-transform: uppercase;
  font-size: 12px;
  padding: 6px 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  ${({ theme: { color, transition }, ...props }) => css`
    transition: ${transition.base};

    ${props.primary &&
    css`
      color: ${color.black.base};
      background-color: ${color.white.base};
      border: 1px solid ${color.white.base};

      &:hover {
        background-color: ${color.white[100]};
        border: 1px solid ${color.white[100]};
      }
    `}

    ${props.secondary &&
    css`
      color: ${color.white.base};
      background-color: ${color.primary.base};
      border: 1px solid ${color.primary.base};

      &:hover {
        background-color: ${color.primary[100]};
        border: 1px solid ${color.primary[100]};
      }
    `}

    ${props.tertiary &&
    css`
      color: ${color.primary.base};
      background-color: ${color.white.base};
      border: 1px solid ${color.primary.base};

      &:hover {
        border: 1px solid ${color.black.base};
        color: ${color.black.base};
      }
    `}

      // disabled
    ${props.disabled &&
    css`
      color: ${color.black[200]};
      background-color: ${color.black[100]};
      border: 1px solid ${color.black[100]};
    `}
    
    // others
    ${props.filled &&
    css`
      width: 100%;
    `}
  `};
`

export default Button
