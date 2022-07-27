import React from 'react'
import Router, { useRouter } from 'next/router'
import { PAGE_AUTH_TYPE, authLocalStorage, AUTHENTICATION } from '~/constants'
import { getRedirectPage } from '~/auth/utils'
import { useSelector } from '~/store'
import { getAuthState } from '~/selectors'
import useAuthentication from '../hooks/useAuthentication'

type Props = Partial<{
  children: React.ReactNode
  type: PAGE_AUTH_TYPE
}>

const MemoChildren = React.memo(({ children }: Record<string, any>) => children)

const AuthenticationProvider = ({ type, children }: Props) => {
  const { pathname } = useRouter()
  const { token, id } = authLocalStorage.get()
  const authState = useSelector(getAuthState)
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

  if (authState === AUTHENTICATION.AUTHENTICATING || redirectUrl) {
    return null
  }

  return <MemoChildren>{children}</MemoChildren>
}

export default AuthenticationProvider
