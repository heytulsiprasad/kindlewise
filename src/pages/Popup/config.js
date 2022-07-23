export const backendUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://kindlewise-server.herokuapp.com'
    : 'http://localhost:5000';
