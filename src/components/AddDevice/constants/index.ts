import { OS_OPTIONS, VENDOR_OPTIONS } from '~/components/Home/constants'

export enum ADD_DEVICE_STAGE {
  INITIAL = 'initial',
  SUBMITTING = 'submitting',
  ADDED = 'added',
}

// slice(1) removes 'Nezáleží' option from OS_OPTIONS and VENDOR_OPTIONS
export const dropdownOsOptions = OS_OPTIONS.slice(1)
export const dropdownVendorOptions = VENDOR_OPTIONS.slice(1)
