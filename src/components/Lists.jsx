import { Text, View } from 'react-native';

const Lists = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: '#4d2f59',
        height: 200,
        width: 200,
        padding: 10,
        borderRadius: 10,
      }}
    >
      {data
        ? data.map((it) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Text>nome: {it.name} </Text>
                <Text>idade: {it.idade} </Text>
              </View>
            );
          })
        : 'Listagem'}
    </View>
  );
};

export default Lists;
