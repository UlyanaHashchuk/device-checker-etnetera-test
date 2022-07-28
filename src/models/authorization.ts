/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core'
import { AUTHENTICATION, STATE_KEY, USER_TYPE } from '~/constants'
import { RootModel } from '~/models/index'

export type UserInfoType = {
  id: string | number | null
  type: USER_TYPE
  login: string
  name: string
}

export type AuthorizationStateType = {
  authState: AUTHENTICATION
  user: UserInfoType
}

const initialState: AuthorizationStateType = {
  authState: AUTHENTICATION.AUTHENTICATING,
  user: {
    id: null,
    type: USER_TYPE.USER,
    login: '',
    name: '',
  },
}

export const authorization = createModel<RootModel>()({
  name: STATE_KEY.AUTHORIZATION,
  state: initialState,
  reducers: {
    setUserInfo(state, payload: UserInfoType) {
      state.user = payload
    },
    setAuthState(state, payload: AUTHENTICATION) {
      state.authState = payload
    },
    resetState() {
      return initialState
    },
  },
})
