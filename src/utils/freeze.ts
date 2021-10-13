export const freeze = (timeout = 1000) =>
  new Promise(resolve => setTimeout(resolve, timeout))
