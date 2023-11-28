import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';
import {containerPadding} from '../../home/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteFoam,
    justifyContent: 'space-between',
  },
  formContainer: {
    padding: containerPadding,
  },
  buttonText: {
    color: color.white,
  },
});

export default styles;
