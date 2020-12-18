import React from 'react';
import Estilo from '../estilo';
import { Text } from 'react-native';

export default (props) => {
    return (
        <>
            <Text style={Estilo.txtG}>Membros da família:</Text>
            {props.children}
        </>
    );
};
