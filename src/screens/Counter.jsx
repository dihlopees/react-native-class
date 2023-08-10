const Counter = () => {
  const [contador, setContador] = useState(0);
  const onPressButton = () => {
    setContador(contador + 2);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{contador}</Text>
      <MyButton title="Contador + 2" onPress={onPressButton} />
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e8fa',
  },
  text: {
    fontSize: 32,
    color: '#a1a',
    fontWeight: 'bold',
  },
});
