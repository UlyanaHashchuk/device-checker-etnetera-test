import React from 'react'
import { request } from '~/api'
import { Dispatch, useDispatch } from '~/store'
import {
  AUTHENTICATION,
  STATE_KEY,
  authLocalStorage,
  PAGE_URLS,
} from '~/constants'
import { UserInfoType } from '~/models/authorization'
import Router from 'next/router'

export type SignInFormValues = {
  login: string
  password: string
}

type SignInPropsType = {
  values: SignInFormValues
  onError: () => void
}

type SingInResponseType = {
  token: string
} & UserInfoType

const useAuthentication = () => {
  const dispatch = useDispatch<Dispatch>()

  const setAuthState = React.useCallback((state: AUTHENTICATION) => {
    dispatch[STATE_KEY.AUTHORIZATION].setAuthState(state)
  }, [])

  const setUserInfo = React.useCallback(
    (userInfo: UserInfoType, state: AUTHENTICATION) => {
      dispatch[STATE_KEY.AUTHORIZATION].setUserInfo(userInfo)
      setAuthState(state)
    },
    []
  )

  const verify = (id: string) => {
    request<UserInfoType>({
      url: `users/${id}`,
      method: 'GET',
    })
      .then((data) => {
        setUserInfo(data, AUTHENTICATION.AUTHENTICATED)
      })
      .catch(() => {
        setAuthState(AUTHENTICATION.UNAUTHENTICATED)
      })
  }

  const signIn = ({ values, onError }: SignInPropsType) => {
    request<SingInResponseType>({
      url: 'login',
      method: 'POST',
      body: JSON.stringify({ ...values }),
    })
      .then((data) => {
        const { id, token } = data

        if (id) {
          setUserInfo(data, AUTHENTICATION.AUTHENTICATED)
          authLocalStorage.set({ id: id.toString(), token: token })
          Router.replace(PAGE_URLS.HOME)
        }
      })
      .catch(() => {
        setAuthState(AUTHENTICATION.UNAUTHENTICATED)
        onError()
      })
  }

  const signOut = () => {
    authLocalStorage.remove()

    Object.values(STATE_KEY).forEach((value) => {
      dispatch[value].resetState()
    })
  }

  return { signIn, signOut, verify }
}

export default useAuthentication
