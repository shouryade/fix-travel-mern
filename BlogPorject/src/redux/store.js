import { configureStore,combineReducers  } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import themeReducer from './theme/themeSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer

})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }) 
})

export const persistor = persistStore(store);