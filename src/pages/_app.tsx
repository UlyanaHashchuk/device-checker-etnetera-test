import 'tailwindcss/tailwind.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import { Theme } from '~/ui'
import GlobalStyles from '~/utils/GlobalStyles'
import type { PAGE_AUTH_TYPE } from '~/constants'

type LayoutPropsType = Partial<{
  children: React.ReactNode
  layoutProps: Record<string, boolean>
}>

interface ComponentType {
  Component: React.FunctionComponent & {
    layout?: React.FunctionComponent
    layoutProps?: Record<string, boolean>
    type?: PAGE_AUTH_TYPE
  }
}

const DefaultLayout = React.memo(({ children }: LayoutPropsType) => (
  <>{children}</>
))

const App = ({ Component, pageProps }: AppProps & ComponentType) => {
  const Layout = Component.layout ?? DefaultLayout
  const layoutProps = Component.layoutProps ?? {}

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
