import React from 'react'
import TopNavigation from './components/TopNavigation'
import { Container, Content } from './index.styled'

type Props = {
  children: React.ReactNode
  centered?: boolean
}

const BaseLayout = React.memo(({ children, centered = true }: Props) => (
  <Container>
    <TopNavigation />
    <Content centered={centered}>{children}</Content>
  </Container>
))

export default BaseLayout
