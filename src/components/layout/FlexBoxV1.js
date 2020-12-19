import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#666" />
            <Quadrado cor="#f00" />
            <Quadrado cor="#090" />
            <Quadrado cor="#009" />
            <Quadrado cor="#707" />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        justifyContent: 'space-between', //como organizar a distribuição no main axys
        flexGrow: 1,
    },
});
