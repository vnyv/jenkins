import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import { createListReducer } from './redux-fns';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ajax } from 'rxjs/ajax';
import { map, mergeMap,ofType } from 'rxjs/operators';

// action creators
const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action =>
    ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);

const reducers = combineReducers({
  projects: createListReducer({
    initialState: {
      byId: {},
      allIds: [], 
    },
    changeActionTypes: 'PROJECTS_CHANGED'
  })
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    
const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);
