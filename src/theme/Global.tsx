import {StyleSheet} from 'react-native';

export const Global = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 18,
  },
  historyResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
});

export const colors = {
  black: '#000',
  white: '#fff',
  lightGrey: '#9B9B9B',
  darkGrey: '#2D2D2D',
  orange: '#FF9427',
};
