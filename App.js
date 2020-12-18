import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Familia from './src/components/relacao/Familia';
import Membro from './src/components/relacao/Membro';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda"></Membro>
                <Membro nome="Vitor" sobrenome="Arruda"></Membro>
            </Familia>
            <Familia>
                <Membro nome="Ana Carolina" sobrenome="Santos"></Membro>
            </Familia>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
