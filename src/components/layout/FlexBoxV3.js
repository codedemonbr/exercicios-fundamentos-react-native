import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#666" lado={20} />
            <Quadrado cor="#f00" lado={30} />
            <Quadrado cor="#090" lado={40} />
            <Quadrado cor="#009" lado={50} />
            <Quadrado cor="#707" lado={60} />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
});
