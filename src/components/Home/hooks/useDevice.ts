import React from 'react'
import { DEVICE_STATE } from '~/components/Home/constants'
import { useSelector } from '~/store'
import { getUser } from '~/selectors'
import { request } from '~/api'

type Props = {
  borrowedBy: string
  id: string
}

const getDeviceState = (borrowedBy: string, login: string) => {
  if (borrowedBy) {
    if (login === borrowedBy) {
      return DEVICE_STATE.BORROWED
    }

    return DEVICE_STATE.NOT_AVAILABLE
  }

  return DEVICE_STATE.AVAILABLE
}

const useDevice = ({ borrowedBy, id }: Props) => {
  const { login, name } = useSelector(getUser)
  const [deviceState, setDeviceState] = React.useState(
    getDeviceState(borrowedBy, login)
  )
  const isBorrowedByMe = deviceState === DEVICE_STATE.BORROWED

  const handleClick = () => {
    if (deviceState === DEVICE_STATE.AVAILABLE) {
      request({
        url: `/phones/${id}/borrow`,
        method: 'POST',
      })
        .then(() => {
          setDeviceState(DEVICE_STATE.BORROWED)
        })
        .catch(() => {
          setDeviceState(DEVICE_STATE.AVAILABLE)
        })
    }

    if (isBorrowedByMe) {
      request({
        url: `/phones/${id}/return`,
        method: 'POST',
      })
        .then(() => {
          setDeviceState(DEVICE_STATE.AVAILABLE)
        })
        .catch(() => {
          setDeviceState(DEVICE_STATE.BORROWED)
        })
    }
  }

  return { deviceState, handleClick, isBorrowedByMe, name }
}

export default useDevice
