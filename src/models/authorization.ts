/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core'
import { AUTHENTICATION, USER_TYPE } from '~/constants'
import { RootModel } from '~/models/index'

export type UserInfoType = {
  id: string | number | null
  type: USER_TYPE
  login: string
  name: string
}

type AuthorizationState = {
  authState: AUTHENTICATION
  user: UserInfoType
}

const initialState: AuthorizationState = {
  authState: AUTHENTICATION.AUTHENTICATING,
  user: {
    id: null,
    type: USER_TYPE.USER,
    login: '',
    name: '',
  },
}

export const authorization = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setUserInfo(state, payload: UserInfoType) {
      state.user = payload
    },
    setAuthState(state, payload: AUTHENTICATION) {
      state.authState = payload
    },
    resetState(state) {
      state.user = initialState.user
      state.authState = AUTHENTICATION.UNAUTHENTICATED
    },
  },
})
