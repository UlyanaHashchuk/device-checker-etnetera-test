import LocalStorage from '~/auth/Storage'

export const AUTHORIZATION_STATE_KEY = 'authorization'
export const DEVICES_STATE_KEY = 'devices'

export enum PAGE_AUTH_TYPE {
  SECURE = 'SECURE',
  UNSECURE = 'UNSECURE',
  UNSECURE_ONLY = 'UNSECURE_ONLY',
}

export const PAGE_URLS = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  ADD_DEVICE: '/add-device',
}

export enum AUTHENTICATION {
  AUTHENTICATING = 'authenticating',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
}

export enum USER_TYPE {
  ADMIN = 'admin',
  USER = 'user',
}

type LocalStorageType = {
  token: string
  id: string
}

export const authLocalStorage = new LocalStorage<LocalStorageType>({
  name: 'etnetera-test',
})
