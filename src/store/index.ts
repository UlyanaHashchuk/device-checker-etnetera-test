import type { RematchDispatch, RematchRootState } from '@rematch/core'
import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'

import type { RootModel } from '~/models'
import { models } from '~/models'

const store = init<RootModel>({
  models,
  plugins: [immerPlugin()],
})

type Dispatch = RematchDispatch<RootModel>
type RootState = RematchRootState<RootModel>

export { store, createSelector, useSelector, useDispatch }

export type { Dispatch, RootState }
