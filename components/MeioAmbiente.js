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
            Os oceanos são muito importantes para a vida no planeta, mas sofrem diversos impactos ambientais causados pelas ações humanas. A poluição por plásticos, o descarte de lixo, derramamentos de petróleo, pesca excessiva e o aquecimento global prejudicam a água e colocam em risco milhares de espécies marinhas. Esses problemas afetam os animais, destroem habitats e desequilibram os ecossistemas marinhos.
          </Text>
        </View>

        <View style={styles.cardSecondary}>
          <Text style={styles.subtitle}>🌱 Como podemos ajudar?</Text>
          <Text style={styles.description}>
            Podemos ajudar os oceanos com pequenas atitudes no dia a dia. Reduzir o uso de plástico, reciclar o lixo, economizar água, evitar jogar resíduos nas ruas e praias e participar de ações de limpeza são atitudes importantes. Também é essencial preservar a natureza e conscientizar outras pessoas sobre a importância dos oceanos para o futuro do planeta.
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