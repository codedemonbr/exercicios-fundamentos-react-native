import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default (props) => {
    if (props.num % 2) {
        return <Text style={Estilo.txtG}>Impar</Text>;
    } else {
        return <Text style={Estilo.txtG}>Par</Text>;
    }
};
