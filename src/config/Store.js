import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import {logger} from 'redux-logger';
// Imports: Redux
import rootReducer from '../reducer/index';
// Middleware: Redux Persist Config

const middlewareList = [];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  blacklist: [''],
  timeout: null,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), ...middlewareList),
);
// Middleware: Redux Persist Persister
// sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);
// Exports
export default {store, persistor};
