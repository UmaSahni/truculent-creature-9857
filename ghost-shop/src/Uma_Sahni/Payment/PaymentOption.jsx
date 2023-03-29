import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import PayPage from './PayPage'
import TssMoney from './StaticCom/TssMoney'

const PaymentOption = () => {
  return (
    <div>
        <Heading size={"4px"} >Payment Option</Heading>
        <TssMoney/>
        <Box>

        </Box>
        <PayPage/>
    </div>
  )
}

export default PaymentOption