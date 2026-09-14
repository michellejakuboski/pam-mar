import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../assets/img/Home.webp')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.botoes}>
          <Pressable
            onPress={() => navigation.navigate('Especies')}
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'cyan' : 'white' },
              styles.customisar,
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.clicar}>
                {pressed ? 'Clicado!' : 'Espécies'}
              </Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Meio Ambiente')}
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'cyan' : 'white' },
              styles.customisar,
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.clicar}>
                {pressed ? 'Clicado!' : 'Meio Ambiente'}
              </Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Curiosidades')}
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'cyan' : 'white' },
              styles.customisar,
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.clicar}>
                {pressed ? 'Clicado!' : 'Curiosidades'}
              </Text>
            )}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 335,
    height: 460,
  },

  botoes: {
    alignItems: 'center',
    margin: 100,
  },

  customisar: {
    borderRadius: 8,
    padding: 6,
    margin: 15,
    width: 250,
  },

  clicar: {
    fontSize: 16,
  },
});

export default HomeScreen;