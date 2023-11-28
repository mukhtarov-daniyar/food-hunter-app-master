import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';
import {scale} from '../../../theme/dimension';

export const containerPadding = scale(20);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: color.whiteFoam,
  },
  innerContainer: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  list: {
    padding: containerPadding,
  },
});

export default styles;
