import {StyleSheet} from 'react-native';
import {color, textStyle} from '../../../../theme/color';
import {scale} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(60),
  },
  text: {
    ...textStyle,
    marginTop: scale(10),
    textAlign: 'center',
  },
  buttonContainer: {
    padding: scale(20),
  },
  buttonText: {
    ...textStyle,
    color: color.white,
  },
});

export default styles;
