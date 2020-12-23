import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#666" />
            <Quadrado cor="#f00" />
            <Quadrado cor="#090" />
            <Quadrado cor="#009" />
            <Quadrado cor="#707" />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly', //como organizar a distribuição no main axys
    },
});
