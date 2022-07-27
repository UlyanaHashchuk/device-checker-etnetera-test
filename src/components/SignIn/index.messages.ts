import { defineMessages } from 'react-intl'

export default defineMessages({
  signInTitle: {
    id: 'SignIn.signInTitle',
    defaultMessage: 'Přihlášení',
    description: 'Sign in title',
  },
  signInNote: {
    id: 'SignIn.signInNote',
    defaultMessage:
      'Po přihlášení si budeš moct půjčit telefon, připadne vložit nový do seznamu.',
    description: 'Sign in note',
  },
  namePlaceholder: {
    id: 'SignIn.namePlaceholder',
    defaultMessage: 'Přihlašovací jméno',
    description: 'Form name placeholder',
  },
  passwordPlaceholder: {
    id: 'SignIn.passwordPlaceholder',
    defaultMessage: 'Heslo',
    description: 'Form password placeholder',
  },
  submitButton: {
    id: 'SignIn.submitButton',
    defaultMessage: 'Přihlásit se',
    description: 'Submit button message',
  },
  processing: {
    id: 'SignIn.processing',
    defaultMessage: 'Zpracovává se...',
    description: 'Submit button loading state',
  },
  singInError: {
    id: 'SignIn.singInError',
    defaultMessage:
      'Přihlášení se nezdařilo. Zkontrolujte prosím přihlašovací jméno a heslo.',
    description: 'Sign in error',
  },
})
