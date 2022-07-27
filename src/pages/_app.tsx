import 'tailwindcss/tailwind.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Theme } from '~/ui'
import { store } from '~/store'
import GlobalStyles from '~/utils/GlobalStyles'
import { PAGE_AUTH_TYPE } from '~/constants'
import AuthenticationProvider from '~/auth/AuthenticationProvider'

type LayoutPropsType = Partial<{
  children: React.ReactNode
  layoutProps: Record<string, boolean>
}>

interface ComponentType {
  Component: React.FunctionComponent & {
    layout?: React.FunctionComponent
    layoutProps?: Record<string, boolean>
    type: PAGE_AUTH_TYPE
  }
}

const DefaultLayout = React.memo(({ children }: LayoutPropsType) => (
  <>{children}</>
))

const App = ({ Component, pageProps }: AppProps & ComponentType) => {
  const Layout = Component.layout ?? DefaultLayout
  const layoutProps = Component.layoutProps ?? {}
  const type = Component.type || PAGE_AUTH_TYPE.UNSECURE

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Layout {...layoutProps}>
            <AuthenticationProvider type={type}>
              <Component {...pageProps} />
            </AuthenticationProvider>
          </Layout>
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  )
}

export default App
