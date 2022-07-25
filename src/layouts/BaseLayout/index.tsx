import React from 'react'
import TopNavigation from './components/TopNavigation'

type Props = {
  children: React.ReactNode
}

const BaseLayout = React.memo(({ children }: Props) => (
  <div>
    <TopNavigation />
    <div>{children}</div>
  </div>
))

export default BaseLayout
