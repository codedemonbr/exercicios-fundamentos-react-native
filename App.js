import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import ListaProdutos from './src/components/produtos/ListaProdutos';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ListaProdutos></ListaProdutos>
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
