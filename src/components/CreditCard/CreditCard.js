import React from 'react'
import {
  IconAmex,
  IconContactless,
  IconMastercard,
  IconSecurityTag,
  IconVisa,
} from '../index'

import './CreditCard.css'

const renderCardType = cardNumber => {
  if (cardNumber.match(/'^4'/) != null) return <IconVisa />
  if (cardNumber.match(/^(34|37)/) != null) return <IconAmex />
  if (cardNumber.match(/^5[1-5]/) != null) return <IconMastercard />

  return <IconVisa /> // default type
}

const CreditCard = props => {
  return (
    <div
      className={
        'credit-card grid grid-col-1 bg-blue-500 p-8 rounded-3xl shadow-md text-white font-mono font-semibold'
      }
    >
      <header className={'content-center grid grid-cols-2'}>
        <div className={'flex flex-row gap-x-6'}>
          <IconSecurityTag />
          <IconContactless />
        </div>
        <div className={'justify-self-end'}>
          {props.num ? renderCardType(props.num) : <IconVisa />}
        </div>
      </header>

      <main className={'self-center'}>
        <p className={'text-3xl text-center'}>
          {props.num
            ? props.num.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
            : '#### #### #### ####'}
        </p>
      </main>
      <footer className={'self-end grid grid-cols-2'}>
        <div>
          <p>
            {props.expMonth ? props.expMonth : 'MM'}/
            {props.expYear ? props.expYear.substr(2, 2) : 'YY'}
          </p>
          <p>{props.name ? props.name : 'Firstname Lastname'}</p>
        </div>
        <p className={'self-end justify-self-end'}>
          {/*
            todo: if I had the time I would have made the card flip to show where the cvv code is supposed to be located
          */}
          cvv {props.cvv ? props.cvv : '###'}
        </p>
      </footer>
    </div>
  )
}

export default CreditCard
