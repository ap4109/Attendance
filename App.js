import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'Home' component ={HomeScreen}/>
          <Stack.Screen name = 'Scan' component ={ScannerScreen}/>
          <Stack.Screen name = 'Result' component ={ResultScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}