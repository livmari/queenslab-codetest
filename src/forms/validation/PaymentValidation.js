import * as yup from 'yup'

let isEmpty = "Field can't be left empty."
let onlyNumbers = 'Field may only consist of numbers.'

export const paymentSchema = yup.object({
  cardNum: yup
    .string()
    .required(isEmpty)
    .matches(/[0-9]+/, onlyNumbers)
    // todo: 15 length is for amex, 16 for everything else, this should probably be validated more specifically
    .min(15, 'May not be shorter than 15 numbers.')
    .max(16, 'May not be longer than 16 numbers.'),

  cardName: yup
    .string()
    .required(isEmpty)
    .matches(
      /^[a-zA-ZåäöÅÄÖ_ ]*$/,
      'May only consist of alphabetical characters.'
    )
    .min(2, 'May not be shorter than 2 characters.')
    .max(26, 'May not be longer than 26 characters.'),

  cardExpMonth: yup
    .string()
    .required()
    .matches(/^[0-9]{2}$/),

  cardExpYear: yup
    .string()
    .required()
    .matches(/^[0-9]{4}$/),

  cardCvv: yup
    .string()
    .required(isEmpty)
    .matches(/^[0-9]{3}$/, onlyNumbers)
    .min(3, 'May not be shorter than 3 numbers')
    .max(3, 'May not be longer than 3 numbers'),
})
