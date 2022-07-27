import type { Models } from '@rematch/core'

import { authorization } from './authorization'
import { devices } from './devices'

export interface RootModel extends Models<RootModel> {
  authorization: typeof authorization
  devices: typeof devices
}

export const models: RootModel = { authorization, devices }
