import { defineMessages } from 'react-intl'

export default defineMessages({
  borrowedBy: {
    id: 'Home.Device.borrowedBy',
    defaultMessage:
      'Vypůjčeno: { hasName , plural , =0 {unknown} other {{name}}}, { hasDate , plural , =0 {unknown} other {{date}}}',
    description: 'Information about person who borrowed device',
  },
  borrowButton: {
    id: 'Home.Device.borrowButton',
    defaultMessage: 'Půjčit',
    description: 'Borrow button',
  },
  returnButton: {
    id: 'Home.Device.returnButton',
    defaultMessage: 'Vrátit',
    description: 'Return button',
  },
})
