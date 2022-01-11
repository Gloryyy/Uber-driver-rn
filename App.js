import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';
import {
  OriginContextProvider,
  DestinationContextProvider,
} from './src/contexts/context';

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;
