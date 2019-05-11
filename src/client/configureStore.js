import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducer';

export default function configureStore(config, preloadedState) {
  const middlewares = config.isLogging ? [loggerMiddleware, thunkMiddleware] : [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = config.setEnhancers ? [middlewareEnhancer, monitorReducersEnhancer] : [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
