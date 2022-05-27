import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MovieListScreen from './src/Screens/MovieListScreen';
import FailureScreen from './src/Screens/FailureScreen';




const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer initialRouteName="MovieListScreen">
      <Stack.Navigator>
        <Stack.Screen
          name="Movies List" component={MovieListScreen}
          options={() => ({
            title: "Movies List",
            headerTintColor: "#f0932b",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            }
          })} />
        <Stack.Screen
          name="Error" component={FailureScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;
