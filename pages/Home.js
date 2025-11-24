import { Text, TouchableOpacity, View } from "react-native";

export default function Home({navigate}) {
    return (
        <View>
            <TouchableOpacity>
                <Text>
                    Usuarios
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text>
                    Chamados
                </Text>
            </TouchableOpacity>
        </View>
    )
}