import { createSelector, RootState } from '~/store'
import { AUTHORIZATION_STATE_KEY, DEVICES_STATE_KEY } from '~/constants'

export const getAuthorizationState = (state: RootState) =>
  state[AUTHORIZATION_STATE_KEY]

export const getDevicesState = (state: RootState) => state[DEVICES_STATE_KEY]

export const getUserType = createSelector(
  getAuthorizationState,
  (state) => state.user.type
)

export const getUser = createSelector(
  getAuthorizationState,
  (state) => state.user
)

export const getAuthState = createSelector(
  getAuthorizationState,
  (state) => state.authState
)

export const getDeviceFilters = createSelector(
  getDevicesState,
  (state) => state.filters
)
