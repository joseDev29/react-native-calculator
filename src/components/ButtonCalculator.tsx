import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {colors} from '../theme/Global';

interface Props {
  text: string;
  action: (action: string) => void;
  backgroundColor?: string;
  color?: string;
  width?: number | string;
}

export const ButtonCalculator = ({
  text,
  action,
  backgroundColor = colors.darkGrey,
  color = colors.white,
  width,
}: Props) => {
  const {width: windowWidth} = Dimensions.get('window');
  const buttonWidth = windowWidth * 0.2;

  return (
    <TouchableOpacity
      style={{width: width ? width : buttonWidth, height: buttonWidth}}
      onPress={() => {
        action(text);
      }}>
      <View style={[style.button, {backgroundColor}]}>
        <Text style={[style.buttonText, {color}]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
});
