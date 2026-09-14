import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Mamiferos from './Mamiferos';
import Invertebrados from './Invertebrados';
import Peixes from './Peixes';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const EspeciesHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Text style={styles.titulo}>Espécies</Text>
          <Image
          source={require('../assets/img/golfinho.jpg')}
          style={styles.imagem}
          resizeMode="cover"
        />
        <View style={styles.card}>
          <Text style={styles.descricao}>
           Espécies aquáticas são seres vivos que habitam ambientes de água, como oceanos, mares, rios e lagos. Elas incluem diversos grupos de animais, como peixes, mamíferos, répteis e invertebrados, cada um com características adaptadas para sobreviver nesses ambientes
          </Text>
        </View>

        <View style={styles.listaContainer}>
          <Text style={styles.subtitulo}>         Exemplos de espécies aquáticas:</Text>
          <View style={styles.chips}>
            <View style={styles.chip}><Text style={styles.chipText}>Peixes</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Mamíferos</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Reptéis Aquáticos</Text></View>
          </View>
        </View>
       <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
        >
          <Text style={styles.backText}>Voltar</Text>
        </Pressable>
      </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    padding: 24,
    alignItems: 'center',
  },

   backButton: 
   {
    backgroundColor: '#0f67b3',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  titulo:
   {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#023e8a',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  card: 
  {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    width: '100%',
  },

  descricao: 
  {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c3e50',
    textAlign: 'justify',
  },

  listaContainer: 
  {
    width: '100%',
    marginBottom: 24,
  },

  subtitulo: 
  {
    fontSize: 18,
    fontWeight: '600',
    color: '#0077b6',
    marginBottom: 12,
  },
  chips: 
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  chip: 
  {
    backgroundColor: '#caf0f8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#90e0ef',
  },
  chipText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#023e8a',
  },

  imagem: 
  {
    width: '100%',
    height: 220,
    borderRadius: 28,
    marginTop: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  backButtonPressed: {
    backgroundColor: '#0a4d87',
    transform: [{ scale: 0.97 }],
  },

  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EspeciesHome;