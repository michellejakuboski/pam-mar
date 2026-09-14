import { View, Image, Pressable, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Mamiferos from './Mamiferos';
import Invertebrados from './Invertebrados';
import Peixes from './Peixes';
import EspeciesHome from './EspeciesHome';

const Drawer = createDrawerNavigator();

const Especies = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{paddingTop: 77, borderRadius: 20,},
        drawerLabelStyle: 
        {
          marginLeft: 15,
          paddingTop: 7,
          paddingBottom: 7,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'turquoise',
          backgroundColor: 'lightblue',
          textAlign: 'center',
        },
      }}
    >
      <Drawer.Screen name="Espécies" component={EspeciesHome} />
      <Drawer.Screen name="Mamíferos" component={Mamiferos} />
      <Drawer.Screen name="Invertebrados" component={Invertebrados} />
      <Drawer.Screen name="Peixes" component={Peixes} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default Especies;