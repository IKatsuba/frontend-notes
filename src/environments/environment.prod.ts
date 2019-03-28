export const environment = {
  production: true,
  DSN: null,
  news: require('./config.json').news,
  fb: require('./config.json').firebase
};
