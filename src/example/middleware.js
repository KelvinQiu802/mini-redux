export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('I am a Middleware!!!');
  next(action);
};
