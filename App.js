import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import UsuarioLogado from './src/components/UsuarioLogado';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <UsuarioLogado
                usuario={{ nome: 'Pedro', email: 'pedro@email.com' }}
            ></UsuarioLogado>
            <UsuarioLogado usuario={{ nome: 'Arthur' }}></UsuarioLogado>
            <UsuarioLogado usuario={{ email: 'bob@email.com' }}></UsuarioLogado>
            <UsuarioLogado usuario={null}></UsuarioLogado>
            <UsuarioLogado usuario={{}}></UsuarioLogado>

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
