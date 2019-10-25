import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
// import firebase from 'firebase';
import firebase from './config/fbConfig';


const store = createStore(rootReducer,
  compose(reduxFirestore(firebase),
   applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))))
;

const rrfprops = {
  firebase,
  config: {
    userProfile: 'users',
    // sessions: 'sessions',
    // presence: 'presence',
    attachAuthIsReady: true,
    useFirestoreForProfile: true


  },
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(<Provider store={store}> 
  <ReactReduxFirebaseProvider {...rrfprops}>
   <App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
