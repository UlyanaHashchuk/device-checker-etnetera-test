import React from 'react'
import { Dispatch, useDispatch, useSelector } from '~/store'
import { getDevices } from '~/selectors'
import { useIntl } from 'react-intl'
import { Text } from '~/ui'
import { request } from '~/api'
import { STATE_KEY } from '~/constants'
import { DeviceType } from '~/models/devices'
import Device from '../Device'
import messages from '../../index.messages'
import { Container } from './index.styled'

type Props = {
  searchInput: string
}

const Devices = ({ searchInput }: Props) => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch<Dispatch>()
  const [isLoading, setIsLoading] = React.useState(false)
  let devices = useSelector(getDevices)

  if (searchInput !== '') {
    devices = devices.filter(({ model }) =>
      model.toLowerCase().includes(searchInput.toLowerCase())
    )
  }

  React.useEffect(() => {
    setIsLoading(true)

    request<DeviceType[]>({
      url: 'phones',
      method: 'GET',
    })
      .then((data) => {
        if (data) {
          dispatch[STATE_KEY.DEVICES].setDevices(data)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (!devices.length || isLoading) {
    return (
      <Text secondary className="flex justify-center mt-10">
        {formatMessage(isLoading ? messages.isLoading : messages.noDevices)}
      </Text>
    )
  }

  return (
    <Container>
      {devices.map((device: DeviceType) => (
        <Device key={device.id} {...device} />
      ))}
    </Container>
  )
}

export default Devices
