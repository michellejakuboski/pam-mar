import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MeioAmbiente = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>
            Meio Ambiente Marinho
          </Text>
          <View style={styles.titleUnderline} />
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>
            O mar guarda muitos mistérios e curiosidades incríveis. Cerca de 70% da superfície da Terra é coberta por água, mas grande parte dos oceanos ainda não foi totalmente explorada pelos seres humanos. Cientistas acreditam que existem diversas espécies marinhas que ainda não foram descobertas.
          </Text>
        </View>

        <View style={styles.cardSecondary}>
          <Text style={styles.subtitle}>Você sabe da onde vem o oxigênio?</Text>
          <Text style={styles.description}>
           Outra curiosidade é que o oceano ajuda a produzir grande parte do oxigênio do planeta por meio de pequenos organismos marinhos chamados fitoplânctons. Além disso, existem regiões muito profundas, como as fossas oceânicas, onde a pressão é extremamente alta e vivem animais adaptados a ambientes escuros e extremos.
          </Text>
        </View>

        <View style={styles.cardTerciario}>
          <Text style={styles.subtitle}>Animais surpreendentes</Text>
          <Text style={styles.description}>
O mar também abriga animais surpreendentes. Algumas baleias conseguem se comunicar a longas distâncias, polvos possuem grande inteligência e certos peixes conseguem produzir luz própria através de um fenômeno chamado bioluminescência. Essas curiosidades mostram como os oceanos são importantes e fascinantes para a vida na Terra.
          </Text>
        </View>

         <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}
        >
          <Text style={styles.backText}>Voltar</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: 
  {
    backgroundColor: '#F0F9FF', // fundo claro e suave
  },
  container: 
  {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },

  backButton: 
  {
    backgroundColor: '#2E86AB', // azul marinho suave
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 40,
    marginBottom: 24,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginTop: 22,
  },
  backButtonPressed: {
    backgroundColor: '#1C6E8C',
    transform: [{ scale: 0.96 }],
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  headerWrapper: {
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1C5A6E',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  titleUnderline: {
    width: 70,
    height: 3,
    backgroundColor: '#2E86AB',
    borderRadius: 10,
    marginTop: 8,
  },
  // Card principal (problemas)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 24,
    marginBottom: 24,
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E0F0F8',
    width: '100%',
  },
  cardSecondary: 
  {
    backgroundColor: '#E8F4FB',
    borderRadius: 32,
    padding: 24,
    shadowColor: '#8BA0B8',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D0E8F2',
    width: '100%',
  },

  cardTerciario: 
  {
    backgroundColor: '#E8F4FB',
    borderRadius: 32,
    padding: 24,
    shadowColor: '#8BA0B8',
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D0E8F2',
    width: '100%',
    marginTop: 22,
  },

  subtitle: 
  {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C6E8C',
    marginBottom: 16,
    letterSpacing: -0.2,
  },
  description:
  {
    fontSize: 16,
    lineHeight: 26,
    color: '#2A4A6E',
    textAlign: 'justify',
    fontWeight: '400',
  },
});

export default MeioAmbiente;