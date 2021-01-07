import React from 'react'
import { PaymentForm } from '../../forms'

const PaymentPage = () => {
  return (
    <div
      data-testid={'payment-page'}
      className={
        'py-16 payment-page container flex justify-center items-center'
      }
    >
      <PaymentForm />
    </div>
  )
}

export default PaymentPage
