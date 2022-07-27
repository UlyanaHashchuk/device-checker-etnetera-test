import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'
import Filters from './components/Filters'

const Home = () => {
  const [searchInput, setSearchInput] = React.useState('')

  return (
    <div className="my-5 md:my-10">
      <Filters searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  )
}

Home.layout = BaseLayout
Home.layoutProps = {
  centered: false,
}
Home.type = PAGE_AUTH_TYPE.SECURE

export default Home
