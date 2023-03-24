// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactSlise';
// import { filterReducer } from './filterSlice';
// import storage from 'redux-persist/lib/storage';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlise';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
