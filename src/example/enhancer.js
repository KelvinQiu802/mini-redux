export function loggerEnhancer(createStore) {
  return function (reducer, preloadedState) {
    const store = createStore(reducer, preloadedState);

    const newDispatch = (action) => {
      store.dispatch(action);
      console.log('This is My Logger!');
    };

    return { ...store, dispatch: newDispatch };
  };
}

export function anotherLoggerEnhancer(createStore) {
  return function (reducer, preloadedState) {
    const store = createStore(reducer, preloadedState);

    const newDispatch = (action) => {
      store.dispatch(action);
      console.log('I am another Looger!');
    };

    return { ...store, dispatch: newDispatch };
  };
}
