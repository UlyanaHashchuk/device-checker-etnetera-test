import styled, { css } from 'styled-components'

export const Checkmark = styled.span<{
  isChecked: boolean
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  border-radius: 3px;

  ${({ theme: { color, transition }, isChecked }) => css`
    transition: ${transition.base};
    background-color: ${color.transprent};
    color: ${color.white.base};
    border: 2px solid ${color.black.base};

    ${isChecked &&
    css`
      background-color: ${color.primary.base};
      border-color: ${color.primary.base};
    `}
  `}
`

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  ${({ theme: { color } }) => css`
    color: ${color.black[400]};

    &:hover {
      > ${Checkmark} {
        border: 2px solid ${color.primary[100]};
      }
    }

    & > input {
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0;
      cursor: none;
      pointer-events: none;
    }
  `}
`
