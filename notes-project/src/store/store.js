import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import addedNotesSliceReducer from '../features/notes/addedNotesSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, addedNotesSliceReducer)

const store = configureStore({
  reducer: {
    addedNotes: persistedReducer,
  },
})

export const persistor = persistStore(store)
export default store
