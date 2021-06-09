import React from 'react';
import BottomMenu from './components/StatusBar.js';
import { NavigationContainer } from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider } from 'react-redux';
import reasonsReducer from './store/reducers/Reducers';

const rootReducer = combineReducers({
  reasons: reasonsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    //JSX code rendered as HTML
    //Navigation Container-> basic parent for react native elements like Tab Navigator
    <Provider store={store}>
    <NavigationContainer>
      {/* Bottom menu imported from StatusBar.js -> navigating across the different pages on App  */ }
      <BottomMenu/> 
    </NavigationContainer>
    </Provider>
  );
}