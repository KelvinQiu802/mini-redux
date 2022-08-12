import { createStore } from './src/mini-redux/index';
import loggerEnhancer from './src/example/enhancer';

// 获取元素
const container = document.querySelector('#container');
const increaseBtn = document.querySelector('#increaseBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');

// REDUCER
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'counter/increment':
      return state + 1;
    case 'counter/decrement':
      return state - 1;
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, undefined, loggerEnhancer);

// RENDER
const render = () => {
  container.innerHTML = store.getState();
};

// SUBSCRIBE
const unsubscribe = store.subscribe(render);

// EVENT
increaseBtn.addEventListener('click', () => {
  store.dispatch({ type: 'counter/increment' });
});

decreaseBtn.addEventListener('click', () => {
  store.dispatch({ type: 'counter/decrement' });
});
