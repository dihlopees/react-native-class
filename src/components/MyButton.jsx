import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f5e8fa',
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
