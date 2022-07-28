import React from 'react'
import { USER_TYPE } from '~/constants'
import Device from '../Device'
import { Container } from './index.styled'

const data = [
  {
    id: '1',
    code: '02-M-01',
    os: 'ANDROID',
    vendor: 'SAMSUNG',
    model: 'Galaxy S5 mini',
    osVersion: '6.0.1',
    image:
      'https://www.o2.cz/_pub/dc/a7/7b/470494_1130960_SG_S5_mini_black_bigdetail.png',
    borrowed: {
      user: {
        id: 1,
        type: USER_TYPE.USER,
        login: 'frodo.baggins@etnetera.cz',
        name: 'Frodo Baggins',
      },
      date: 1526486175115,
    },
  },
]

const Devices = () => (
  <Container>
    {data.map((device) => (
      <Device key={device.id} {...device} />
    ))}
  </Container>
)

export default Devices
