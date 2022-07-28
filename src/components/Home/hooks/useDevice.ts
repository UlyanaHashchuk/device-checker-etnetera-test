import React from 'react'
import { DEVICE_STATE } from '~/components/Home/constants'
import { useSelector } from '~/store'
import { getUser } from '~/selectors'

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
  const { login } = useSelector(getUser)
  const [deviceState, setDeviceState] = React.useState(
    getDeviceState(borrowedBy, login)
  )
  const isBorrowedByMe = deviceState === DEVICE_STATE.BORROWED

  const handleClick = () => {
    if (deviceState === DEVICE_STATE.AVAILABLE) {
      console.log('borrow')
    }

    if (isBorrowedByMe) {
      console.log('return')
    }
  }

  return { deviceState, handleClick, isBorrowedByMe }
}

export default useDevice
