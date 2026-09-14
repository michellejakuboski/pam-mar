import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Invertebrados=() => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={true} >

      <View style={styles.container}>

        <Text style={styles.title}>Invertebrados</Text>
        <Image
          source={require('../assets/img/inverHome.webp')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.card}>
          <Text style={styles.description}>
            Os invertebrados marinhos são animais que não possuem
            coluna vertebral e vivem em diferentes regiões dos
            oceanos. Eles possuem enorme diversidade de formas
            e desempenham papel importante no equilíbrio marinho.
          </Text>
        </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>      Exemplos de invertebrados: </Text>

        <View style={styles.listContainer}>
            <View style={styles.animalCard}>
              <Text style={styles.animalEmoji}>
              <Image
          source={require('../assets/img/inver1.webp')}
          style={styles.image1}
          resizeMode="cover"
        />
              </Text>
              <View>
                <Text style={styles.animalName}>Polvo </Text>
                <Text style={styles.animalInfo}>Animal muito inteligente com oito tentáculos.</Text>
              </View>
        </View>

          <View style={styles.animalCard}>
              <Text style={styles.animalEmoji}>
              <Image
          source={require('../assets/img/inver2.webp')}
          style={styles.image1}
          resizeMode="cover"
        />
              </Text>
              <View>
                <Text style={styles.animalName}>Estrela-do-mar</Text>
                <Text style={styles.animalInfo}>Pode regenerar partes do próprio corpo. </Text>
              </View>
          </View>

          <View style={styles.animalCard}>
              <Text style={styles.animalEmoji}>
              <Image
          source={require('../assets/img/inver3.webp')}
          style={styles.image1}
          resizeMode="cover"
        />
              </Text>
              <View>
                <Text style={styles.animalName}>Água Viva</Text>
                <Text style={styles.animalInfo}>Composto por até 99%
 de água, não possui cérebro, coração ou ossos.</Text>
              </View>
          </View>
      </View>
  </View>

        <Pressable
          onPress={() => navigation.goBack('EspeciesHome')}
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
  container: {
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f67b3',
    marginBottom: 20,
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 24,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  
  image1:
  {
    width: 110,
    height: 100,
    borderRadius: 11,
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#2d3e50',
    textAlign: 'justify',
  },

  section: {
    width: '100%',
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f67b3',
    marginBottom: 18,
  },

  listContainer: {
    width: '100%',
  },

  animalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 14,
    padding: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  animalEmoji: {
    fontSize: 35,
    marginRight: 15,
  },

  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f67b3',
  },
  
  animalInfo: {
    color: 'gray',
    width: '85%',
    marginTop: 3,
  },

  backButton: {
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

export default Invertebrados;