import React from 'react';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import devConfig from '../devConfig.json';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = !firebase.apps.length ? firebase.initializeApp(devConfig) : firebase.app();
export default React.createContext(app);
