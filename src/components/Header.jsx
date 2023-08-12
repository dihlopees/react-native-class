import { Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: '#bd5ca6',
        height: 50,
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
