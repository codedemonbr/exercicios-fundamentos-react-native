import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ListaProdutosV2 />
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
