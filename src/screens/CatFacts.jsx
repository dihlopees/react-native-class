import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';

const CatFacts = () => {
  const [catFact, setCatFact] = useState();

  const fetchCatFact = async () => {
    try {
      const { data } = await axios.get('https://catfact.ninja/fact');
      setCatFact(data.fact);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.text}>Cats facts</Text>
        <MyButton title="Fato" onPress={fetchCatFact} />
        <Text style={styles.italic}> {catFact ? catFact : ''}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CatFacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f5e8fa',
    height: '100%'
  },
  text: {
    fontSize: 32,
    color: '#a1a',
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
    padding: 50,
  },
});
