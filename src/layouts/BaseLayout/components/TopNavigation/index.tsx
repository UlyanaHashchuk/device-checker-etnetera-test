import React from 'react'
import NextImage from 'next/image'
import { useIntl } from 'react-intl'
import Router from 'next/router'
import NextLink from 'next/link'
import { Button, Text } from '~/ui'
import { AUTHENTICATION, PAGE_URLS, USER_TYPE } from '~/constants'
import { useSelector } from '~/store'
import { getAuthState, getUser } from '~/selectors'
import useAuthentication from '~/auth/hooks/useAuthentication'
import { Container, RightSideContainer } from './index.styled'
import messages from './index.messages'
import logo from '~/../public/images/logo.jpeg'

const TopNavigation = React.memo(() => {
  const { formatMessage } = useIntl()
  const { login, type } = useSelector(getUser)
  const authState = useSelector(getAuthState)
  const isSignedIn = authState === AUTHENTICATION.AUTHENTICATED
  const { signOut } = useAuthentication()

  const handleClick = () => {
    if (isSignedIn) {
      signOut()
    } else {
      Router.push(PAGE_URLS.SIGN_IN)
    }
  }

  return (
    <Container>
      <div className="flex items-center">
        <NextImage src={logo} width="45px" height="45px" alt="logo" />
        <Text middle className="ml-2 hidden md:block">
          {formatMessage(messages.appName)}
        </Text>
      </div>
      <RightSideContainer>
        {isSignedIn && login && (
          <Text small whiteBase>
            {login}
          </Text>
        )}
        <Button primary onClick={handleClick}>
          <Text>
            {formatMessage(isSignedIn ? messages.signOut : messages.signIn)}
          </Text>
        </Button>
        {type === USER_TYPE.ADMIN && (
          <NextLink href={PAGE_URLS.ADD_DEVICE}>
            <Button primary>{formatMessage(messages.addDevice)}</Button>
          </NextLink>
        )}
      </RightSideContainer>
    </Container>
  )
})

export default TopNavigation
