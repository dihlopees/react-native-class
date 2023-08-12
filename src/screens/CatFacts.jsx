import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import Lists from '../components/Lists';

const CatFacts = () => {
  const [catFact, setCatFact] = useState();
  // const [moreCatFact, setMoreCatFact] = useState([]);
  const array = [
    { name: 'Fulano', idade: 20 },
    { name: 'Beltrano', idade: 22 },
    { name: 'Ciclano', idade: 19 },
    { name: 'Jhon Doe', idade: 30 },
  ];
  const fetchCatFact = async () => {
    try {
      const { data } = await axios.get('https://catfact.ninja/fact');
      setCatFact(data);
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchMoreCatFact = async () => {
  //   try {
  //     const cats = [];
  //     for (let i = 0; i < 2; i++) {
  //       const { data } = await axios.get('https://catfact.ninja/fact');
  //       cats.push(data.fact);
  //       console.log(i, data.fact);
  //     }
  //     setMoreCatFact(cats);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <SafeAreaView>
      <StatusBar />
      <Header title="Header" />
      {/* <Text style={styles.text}>Cats facts</Text>
        <MyButton title="Fato" onPress={fetchCatFact} />
        <Text style={styles.italic}> {catFact ? catFact : ''}</Text>
      </View>
      <View>
        <MyButton title="Mais 2 fatos" onPress={fetchMoreCatFact} />
        <View>
          {moreCatFact.map((it, index) => {
            return (
              <Text style={styles.italicMore} key={index}>
                {it}
              </Text>
            );
          })}
        </View> */}
      <View style={styles.container}>
        <Card onPress={fetchCatFact} background={'#af7cc4'} data={catFact} />
        <Lists data={array} />
      </View>
    </SafeAreaView>
  );
};

export default CatFacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300,
    height: 500,
    gap: 20,
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
  italicMore: {
    fontStyle: 'italic',
    padding: 20,
  },
});
