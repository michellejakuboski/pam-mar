import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import Especies from './components/Especies';
import MeioAmbiente from './components/MeioAmbiente';
import Curiosidades from './components/Curiosidades';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{
            title: 'Início',
            headerStyle: {
              backgroundColor: 'white',
              marginTop: 0,
            },
            headerTitleStyle: {
              fontSize: 20,
              marginLeft: 120,
            },
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />

        <Tab.Screen
          name="Especies"
          component={Especies}
          options={{
            tabBarIcon: () => <Text>🪼</Text>,
            headerStyle: {
              backgroundColor: 'white',
              marginTop: 0,
            },
            headerTitleStyle: {
              fontSize: 20,
              marginLeft: 120,
            },
          }}
        />

        <Tab.Screen
          name="Meio Ambiente"
          component={MeioAmbiente}
          options={{
            tabBarIcon: () => <Text>⚓</Text>,
            headerStyle: {
              backgroundColor: 'white',
              marginTop: 0,
            },
            headerTitleStyle: {
              fontSize: 20,
              marginLeft: 90,
            },
          }}
        />

        <Tab.Screen
          name="Curiosidades"
          component={Curiosidades}
          options={{
            tabBarIcon: () => <Text>🐚</Text>,
            headerStyle: {
              backgroundColor: 'white',
              marginTop: 0,
            },
            headerTitleStyle: {
              fontSize: 20,
              marginLeft: 100,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}