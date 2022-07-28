import React from 'react'
import { useIntl } from 'react-intl'
import { Box, Button, Text } from '~/ui'
import { DeviceType } from '~/models/devices'
import { DEVICE_STATE } from '~/components/Home/constants'
import { dateToLocaleString } from '~/utils/manipultions'
import useDevice from '~/components/Home/hooks/useDevice'
import { Image, ImageContainer, ImageOverlayText } from './index.styled'
import messages from './index.messages'
import noImage from '~/../public/images/noImage.png'

const Device = React.memo(
  ({ id, os, vendor, model, image, osVersion, borrowed }: DeviceType) => {
    const { formatMessage } = useIntl()
    const { user, date } = borrowed || {}
    const { deviceState, handleClick, isBorrowedByMe } = useDevice({
      borrowedBy: user?.login || '',
      id,
    })

    return (
      <Box secondary>
        <ImageContainer>
          <Image src={image ?? noImage} alt="device image" />
          {borrowed && deviceState !== DEVICE_STATE.AVAILABLE && (
            <ImageOverlayText small truncate>
              {formatMessage(messages.borrowedBy, {
                hasName: user?.name?.length ?? 0,
                name: user?.name,
                hasDate: date ?? 0,
                date: date && dateToLocaleString(date),
              })}
            </ImageOverlayText>
          )}
        </ImageContainer>
        <div className="p-2.5">
          <Text large>{model}</Text>
          <Text secondary xSmall>
            {vendor}
          </Text>
          <Text className="mt-5 mb-4">
            {os} {osVersion ? `/ ${osVersion}` : ''}
          </Text>
          <Button
            secondary={deviceState === DEVICE_STATE.AVAILABLE}
            tertiary={isBorrowedByMe}
            filled
            disabled={deviceState === DEVICE_STATE.NOT_AVAILABLE}
            onClick={handleClick}
          >
            {formatMessage(
              isBorrowedByMe ? messages.returnButton : messages.borrowButton
            )}
          </Button>
        </div>
      </Box>
    )
  }
)

export default Device
