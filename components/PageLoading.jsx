import React from 'react'

import PageMessage from './PageMessage'

import {FaTruckLoading} from 'react-icons/fa'

const PageLoading = () => {
  return (
    <PageMessage color="white" size="3em">
        <FaTruckLoading/>
        <h3 className="text-white">LOADING</h3>
    </PageMessage>
  )
}

export default PageLoading