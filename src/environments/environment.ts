// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCbww00P9RoCIT5LNdaqL1-L3d3yKTRgdQ',
    authDomain: 'basiccrudapp-fe819.firebaseapp.com',
    databaseURL: 'https://basiccrudapp-fe819.firebaseio.com',
    projectId: 'basiccrudapp-fe819',
    storageBucket: 'basiccrudapp-fe819.appspot.com',
    messagingSenderId: '1087376193799',
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
