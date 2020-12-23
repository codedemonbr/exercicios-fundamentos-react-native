import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import FlexBoxV3 from './src/components/layout/FlexBoxV3';

export default function App() {
    return (
        <View style={style.container}>
            <FlexBoxV3 />
            <StatusBar style="auto" />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
