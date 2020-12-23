import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import FlexBoxV2 from './src/components/layout/FlexBoxV2';

export default function App() {
    return (
        <View style={style.container}>
            <FlexBoxV2 />
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
