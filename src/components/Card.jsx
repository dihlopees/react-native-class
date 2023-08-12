import { Text, TouchableOpacity, View } from 'react-native';

const Card = ({ background, onPress, data }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: background,
        height: 300,
        width: 300,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Text>{data ? data.fact : 'Clique aqui'}</Text>
        <Text>{data ? data.length : 0}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
