import React from 'react'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'
import Filters from './components/Filters'

const Home = () => {
  const [selectedOptions, setSelectedOptions] = React.useState({
    systemIndex: 0,
    vendorIndex: 0,
  })
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <div className="my-5 md:my-10">
      <Filters
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </div>
  )
}

Home.layout = BaseLayout
Home.layoutProps = {
  centered: false,
}
Home.type = PAGE_AUTH_TYPE.SECURE

export default Home
