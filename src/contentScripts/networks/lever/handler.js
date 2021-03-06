import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_LEVER_PHOTOS = 'toggleLeverPhotos'
export const TOGGLE_LEVER_NAMES = 'toggleLeverNames'

export const leverUpdater = createModel(
  'lever',
  TOGGLE_LEVER_PHOTOS,
  TOGGLE_LEVER_NAMES
)()

getInitialVal(TOGGLE_LEVER_PHOTOS, leverUpdater, 'photos')
getInitialVal(TOGGLE_LEVER_NAMES, leverUpdater, 'names')
