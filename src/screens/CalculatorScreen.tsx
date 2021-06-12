import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {colors, Global} from '../theme/Global';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState<string>('100');
  const [previusNumber, setPreviousNumber] = useState<string>('0');

  const {width} = Dimensions.get('window');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (parseInt(number) === 0) {
      setNumber(numberText);
      return;
    }
    setNumber(number + numberText);
  };

  return (
    <View style={Global.calculatorContainer}>
      {/* 
        numberOfLines condiciona el numero de lineas en el q se renderia el texto y
        adjustsFontSizeToFit ajusta el tamaño de la letra segun las condiciones
      */}
      <Text style={Global.historyResult}> {previusNumber} </Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={Global.result}>
        {number}
      </Text>

      {/* Row Buttons */}
      <View style={Global.row}>
        <ButtonCalculator
          text="C"
          backgroundColor={colors.lightGrey}
          color={colors.black}
          action={clean}
        />
        <ButtonCalculator
          text="+/-"
          backgroundColor={colors.lightGrey}
          color={colors.black}
          action={clean}
        />
        <ButtonCalculator
          text="del"
          backgroundColor={colors.lightGrey}
          color={colors.black}
          action={clean}
        />
        <ButtonCalculator
          text="/"
          backgroundColor={colors.orange}
          color={colors.white}
          action={clean}
        />
      </View>

      {/* Row Buttons */}
      <View style={Global.row}>
        <ButtonCalculator text="7" action={buildNumber} />
        <ButtonCalculator text="8" action={buildNumber} />
        <ButtonCalculator text="9" action={buildNumber} />
        <ButtonCalculator
          text="x"
          backgroundColor={colors.orange}
          color={colors.white}
          action={clean}
        />
      </View>

      {/* Row Buttons */}
      <View style={Global.row}>
        <ButtonCalculator text="4" action={buildNumber} />
        <ButtonCalculator text="5" action={buildNumber} />
        <ButtonCalculator text="6" action={buildNumber} />
        <ButtonCalculator
          text="-"
          backgroundColor={colors.orange}
          color={colors.white}
          action={clean}
        />
      </View>

      {/* Row Buttons */}
      <View style={Global.row}>
        <ButtonCalculator text="1" action={buildNumber} />
        <ButtonCalculator text="2" action={buildNumber} />
        <ButtonCalculator text="3" action={buildNumber} />
        <ButtonCalculator
          text="+"
          backgroundColor={colors.orange}
          color={colors.white}
          action={clean}
        />
      </View>

      {/* Row Buttons */}
      <View style={Global.row}>
        <ButtonCalculator
          text="0"
          width={width * 0.4 + (width * 0.2) / 3 - 8}
          action={buildNumber}
        />
        <ButtonCalculator text="." action={buildNumber} />
        <ButtonCalculator
          text="="
          backgroundColor={colors.orange}
          color={colors.white}
          action={clean}
        />
      </View>
    </View>
  );
};
