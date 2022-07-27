import { createSelector, RootState } from '~/store'
import { AUTHORIZATION_STATE_KEY } from '~/constants'

export const getAuthorizationState = (state: RootState) =>
  state[AUTHORIZATION_STATE_KEY]

export const getUserType = createSelector(
  getAuthorizationState,
  (state) => state.user.type
)

export const getAuthState = createSelector(
  getAuthorizationState,
  (state) => state.authState
)
