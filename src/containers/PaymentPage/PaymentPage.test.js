import React from 'react'
import ReactDOM from 'react-dom'
import PaymentPage from './PaymentPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PaymentPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
