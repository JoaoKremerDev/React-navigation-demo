import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';

import MainStack from './src/navigators/MainStack';

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default App