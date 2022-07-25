import styled, { css } from 'styled-components'

type InputProps = {
  hasError?: boolean
}

export const BaseInput = styled.input`
  box-sizing: border-box;
  outline: none;
  appearance: none;
`

export const InputComponent = styled(BaseInput)<InputProps>`
  width: 100%;
  padding: 8px 0;

  ${({ theme: { color, transition }, ...props }) => css`
    transition: ${transition.base};
    color: ${color.black.base};
    border-bottom: 1px solid ${color.white[200]};

    ${props.hasError &&
    css`
      border-bottom: 1px solid ${color.red.base};
    `}

    &::placeholder {
      color: ${color.white[200]};
    }
  `}
`

export const Container = styled.div`
  width: 100%;
  font-size: 16px;
`
