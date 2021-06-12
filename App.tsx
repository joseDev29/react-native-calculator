import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {Global} from './src/theme/Global';

export const App = () => {
  return (
    //Acomplamos el color de la barra de estado de los dispositivos al del background
    //de la App, y con barStyle acoplamos los iconos de la barra de estado a un color
    //claro para que sean visibles en fondo oscuro
    <SafeAreaView style={Global.background}>
      <StatusBar
        backgroundColor={Global.background.backgroundColor}
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});
