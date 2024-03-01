import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

function HomeScreen(props) {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const color = '#F1F900'

    const handleSendButton = () => {
        navigation.navigate('About', { name, color });
    }

    return (
        <View style={styles.container}>
            <Text> Qual o seu nome? </Text>
            <TextInput
                placeholder="Digite seu nome"
                style={styles.input} value={name}
                onChangeText={(n => setName(n))} />

            <Button style={styles.button} title="Enviar" onPress={handleSendButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        marginVertical: 10,
        padding: 10,
        fontSize: 15,
        backgroundColor: '#DDD'
    }
})

export default HomeScreen;