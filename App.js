import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Favoritos from "./src/pages/Favoritos";
import Carrinho from "./src/pages/Carrinho";
import Editoras from "./src/pages/Editoras";
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs () {
  return (
    <Tab.Navigator initialRouteName='Home' >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Editoras" component={Editoras} options={{ headerShown: false }} />
      <Tab.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }} />
      <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
