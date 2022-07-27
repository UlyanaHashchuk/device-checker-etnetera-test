import React from 'react'
import Router, { useRouter } from 'next/router'
import { PAGE_AUTH_TYPE, authLocalStorage } from '~/constants'
import { getRedirectPage } from '~/auth/utils'
import useAuthentication from '../hooks/useAuthentication'

type Props = Partial<{
  children: React.ReactNode
  type: PAGE_AUTH_TYPE
}>

const MemoChildren = React.memo(({ children }: Record<string, any>) => children)

const AuthenticationProvider = ({ type, children }: Props) => {
  const { pathname } = useRouter()
  const { token, id } = authLocalStorage.get()
  const { verify } = useAuthentication()

  const redirectUrl = getRedirectPage({ type, token, pathname })

  React.useEffect(() => {
    verify({ id, token })
  }, [])

  React.useEffect(() => {
    if (redirectUrl) {
      Router.replace(redirectUrl)
    }
  }, [redirectUrl])

  // TODO: fix hydration error with and "blicking" without this condition
  // if (redirectUrl) {
  //   return <div />
  // }

  return <MemoChildren>{children}</MemoChildren>
}

export default AuthenticationProvider
