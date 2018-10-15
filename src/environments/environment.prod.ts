export const environment = {
  production: true,
  DSN: process.env.DSN,
  news: <{ apiUrl: string, apiKey: string }>process.env.NEWS,
  firebase: process.env.FIREBASE
};
