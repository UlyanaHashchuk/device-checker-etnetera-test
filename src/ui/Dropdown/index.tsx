import React, { SyntheticEvent } from 'react'
import { Container, DropdownTrigger, Symbol, Drop } from './index.styled'

type Props = {
  children: React.ReactNode
  className?: string
  activeTab: number
  onSelect: (prop: number) => void
}

const Dropdown = ({ children, className, activeTab, onSelect }: Props) => {
  const [isOpened, setIsOpened] = React.useState(false)

  const childrenArray = React.Children.toArray(children)

  const onBlur = () => {
    setIsOpened(false)
  }

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsOpened(!isOpened)
  }

  const onOptionSelect = (index: number) => () => {
    onSelect(index)
    setIsOpened(false)
  }

  return (
    <Container className={className} onBlur={onBlur}>
      <DropdownTrigger onClick={onClick}>
        {childrenArray[activeTab]}
        <Symbol isOpened={isOpened}>▼</Symbol>
      </DropdownTrigger>
      {isOpened && (
        <Drop
          onMouseDown={(e: SyntheticEvent) => {
            e.preventDefault()
          }}
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onMouseDown={onOptionSelect(index)}
            >
              {child}
            </div>
          ))}
        </Drop>
      )}
    </Container>
  )
}

export default Dropdown
