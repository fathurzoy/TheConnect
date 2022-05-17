import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, SplashScreen} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // initialroutename = untuk yang mana pertamakali di munculkan
    <Stack.Navigator initialRouteName="Splash">
      {/* component adalah page mana yg mau dirender ketika memanggil screen ini */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {/* headerShown = header ditunjukan atau tidak */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
