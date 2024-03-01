import { useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function AboutScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const name = route.params?.name ?? 'Visitante'

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>
                Tela SOBRE: {name}
            </Text>
            <Button title="Voltar" onPress={handleBackButton}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AboutScreen;