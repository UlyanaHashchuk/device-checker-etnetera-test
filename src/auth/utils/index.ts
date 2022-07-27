import { PAGE_AUTH_TYPE, PAGE_URLS, USER_TYPE } from '~/constants'
import { useSelector } from '~/store'
import { getUserType } from '~/selectors'

type Props = Partial<{
  type: PAGE_AUTH_TYPE
  token: any
  pathname: string
}>

export const getRedirectPage = ({ type, token, pathname }: Props) => {
  const userType = useSelector(getUserType)

  if (type === PAGE_AUTH_TYPE.SECURE && !token) {
    return pathname === PAGE_URLS.SIGN_IN ? null : PAGE_URLS.SIGN_IN
  }

  if (type === PAGE_AUTH_TYPE.UNSECURE_ONLY && token) {
    return pathname === PAGE_URLS.HOME ? null : PAGE_URLS.HOME
  }

  if (
    type === PAGE_AUTH_TYPE.SECURE &&
    pathname === PAGE_URLS.ADD_DEVICE &&
    userType !== USER_TYPE.ADMIN
  ) {
    return PAGE_URLS.HOME
  }

  return null
}
