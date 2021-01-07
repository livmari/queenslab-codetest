import React from 'react'
import ReactDOM from 'react-dom'
import { PaymentPage } from './containers'

import './index.css'

const App = () => {
  return (
    <div>
      <PaymentPage />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
