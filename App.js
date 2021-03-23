import * as React from 'react';
import { View } from 'react-native'
import { Chip } from 'react-native-paper';

const App = () => (
  <View>
    <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  </View>
);

export default App;