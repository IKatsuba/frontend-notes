// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://newsapi.org/v2/',
  NEWS_API_KEY: '022242c86959436495a04d00b0635a24',
  DSN: null,
  firebase: {
    apiKey: 'AIzaSyBtkdUrqNoa6perRttyxhAEqIOsw98InEQ',
    authDomain: 'frontend-notes.firebaseapp.com',
    databaseURL: 'https://frontend-notes.firebaseio.com',
    projectId: 'frontend-notes',
    storageBucket: 'frontend-notes.appspot.com',
    messagingSenderId: '981602356414'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
