import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import {Provider} from 'react-redux';
import store, {persistVal} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistVal}>
          <HomeStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
