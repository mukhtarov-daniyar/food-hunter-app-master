import {StyleSheet} from 'react-native';
import {scale, variables} from '../../../theme/dimension';
import {color} from '../../../theme/color';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: scale(1),
    borderBottomColor: color.lightGrey,
    fontSize: variables.fontSize.regular,
  },
});

export default styles;
