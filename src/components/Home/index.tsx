import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'

const Home = () => <div>Home page</div>

Home.layout = BaseLayout
Home.layoutProps = {
  centered: false,
}
Home.type = PAGE_AUTH_TYPE.SECURE

export default Home
