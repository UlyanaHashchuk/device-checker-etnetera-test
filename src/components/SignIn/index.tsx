import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'
import { Text } from '~/ui'
import { useIntl } from 'react-intl'
import { Container } from './index.styled'
import messages from './index.messages'
import Form from './components/Form'

const SignIn = () => {
  const { formatMessage } = useIntl()
  const [hasError, setHasError] = React.useState(false)

  return (
    <Container>
      <Text large>{formatMessage(messages.signInTitle)}</Text>
      <Text small secondary>
        {formatMessage(hasError ? messages.singInError : messages.signInNote)}
      </Text>
      <Form setHasError={setHasError} />
    </Container>
  )
}

SignIn.layout = BaseLayout
SignIn.type = PAGE_AUTH_TYPE.UNSECURE_ONLY

export default SignIn
