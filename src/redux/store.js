import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'

import logger from 'redux-logger';

import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

<<<<<<< HEAD
export const persistor = persistStore(store)

export default { store, persistor };
=======
export const persistor = persistStore(store);

export default{store, persistor};
>>>>>>> a466dbad1acd4d50454a3383b743b530076cd4ec
