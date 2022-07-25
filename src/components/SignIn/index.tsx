import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'

const SignIn = () => <div>Sign page</div>

SignIn.layout = BaseLayout
SignIn.type = PAGE_AUTH_TYPE.UNSECURE_ONLY

export default SignIn
