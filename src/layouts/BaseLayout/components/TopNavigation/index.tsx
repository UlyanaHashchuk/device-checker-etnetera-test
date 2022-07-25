import React from 'react'
import NextImage from 'next/image'
import { useIntl } from 'react-intl'
import Router from 'next/router'
import { Button, Text } from '~/ui'
import { PAGE_URLS } from '~/constants'
import { Container, RightSideContainer } from './index.styled'
import messages from './index.messages'
import logo from '~/../public/images/logo.jpeg'

const TopNavigation = React.memo(() => {
  const { formatMessage } = useIntl()
  // TODO: use from auth state
  const isSignedIn = false
  const userEmail = 'email@gmail.com'
  const isAdmin = false

  const handleClick = () => {
    if (isSignedIn) {
      console.log('on signOut')
    } else {
      console.log('on signIn')
      Router.push(PAGE_URLS.SIGN_IN)
    }
  }

  return (
    <Container>
      <div className="flex items-center">
        <NextImage src={logo} width="45px" height="45px" alt="logo" />
        <Text large className="ml-2 hidden md:block">
          {formatMessage(messages.appName)}
        </Text>
      </div>
      <RightSideContainer>
        {isSignedIn && userEmail && (
          <Text small whiteBase>
            {userEmail}
          </Text>
        )}
        <Button primary onClick={handleClick}>
          <Text>
            {formatMessage(isSignedIn ? messages.signOut : messages.signIn)}
          </Text>
        </Button>
        {isAdmin && (
          <Button primary>{formatMessage(messages.addDevice)}</Button>
        )}
      </RightSideContainer>
    </Container>
  )
})

export default TopNavigation
