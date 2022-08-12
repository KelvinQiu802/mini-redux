export default function loggerEnhancer(createStore) {
  return function (reducer, preloadedState) {
    const store = createStore(reducer, preloadedState);

    const newDispatch = (action) => {
      store.dispatch(action);
      console.log('This is My Logger!');
    };

    return { ...store, dispatch: newDispatch };
  };
}
