import React from 'react';
import {View, StyleSheet} from 'react-native';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => {
  console.warn('teste');
  return (
    <View style={style.App}>
      <Aleatorio min={6} max={10} />
    </View>
  );
};
const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
