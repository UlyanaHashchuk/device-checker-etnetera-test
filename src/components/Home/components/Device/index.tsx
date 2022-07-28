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
    const { deviceState, handleClick, isBorrowedByMe, name } = useDevice({
      borrowedBy: user?.login || '',
      id,
    })

    const borrowedByName = isBorrowedByMe ? name : user?.name
    const today = isBorrowedByMe ? new Date().getTime() : date

    return (
      <Box secondary>
        <ImageContainer>
          <Image src={image ?? noImage.src} alt="device image" />
          {((borrowed && deviceState !== DEVICE_STATE.AVAILABLE) ||
            isBorrowedByMe) && (
            <ImageOverlayText small truncate>
              {formatMessage(messages.borrowedBy, {
                hasName: borrowedByName?.length ?? 0,
                name: borrowedByName,
                hasDate: today ?? 0,
                date: today && dateToLocaleString(today),
              })}
            </ImageOverlayText>
          )}
        </ImageContainer>
        <div className="p-2.5">
          <Text large truncate>
            {model}
          </Text>
          <Text secondary xSmall truncate>
            {vendor}
          </Text>
          <Text className="mt-5 mb-4" truncate>
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
