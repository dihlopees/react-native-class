import { TouchableOpacity, View, Text } from "react-native";

const MyButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;