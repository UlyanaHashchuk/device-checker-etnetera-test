import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'
import Filters from './components/Filters'
import Devices from './components/Devices'

const Home = () => {
  const [searchInput, setSearchInput] = React.useState('')

  return (
    <div className="my-5 md:my-10">
      <Filters searchInput={searchInput} setSearchInput={setSearchInput} />
      <Devices />
    </div>
  )
}

Home.layout = BaseLayout
Home.layoutProps = {
  centered: false,
}
Home.type = PAGE_AUTH_TYPE.SECURE

export default Home
