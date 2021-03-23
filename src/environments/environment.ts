// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL : "http://localhost:8080",
  firebaseConfig : {
    apiKey: "AIzaSyCtPnfiHtWV_CTT4I4F1DdC7Xu02osKDeU",
    authDomain: "prohubproject.firebaseapp.com",
    databaseURL: 'https://prohubproject-default-rtdb.firebaseio.com/',
    projectId: "prohubproject",
    storageBucket: "prohubproject.appspot.com",
    messagingSenderId: "328408232206",
    appId: "1:328408232206:web:84d8699429a503d421e75f",
    measurementId: "G-P7J3B77CKF"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
