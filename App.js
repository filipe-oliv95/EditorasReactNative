import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { DataProvider } from './src/context/DataContext';

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Favoritos from "./src/pages/Favoritos";
import Carrinho from "./src/pages/Carrinho";
import Editoras from "./src/pages/Editoras";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function Tabs ({ navigation }) {
  return (
    <Tab.Navigator initialRouteName='Home' >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Editoras" component={Editoras} options={{ headerShown: false }} />
      <Tab.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }} />
      <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// function MainNavigator({ navigation }) {

//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: true }}>
//       <Drawer.Screen 
//         name="Tabs" 
//         component={Tabs}
//       />
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Tabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;
