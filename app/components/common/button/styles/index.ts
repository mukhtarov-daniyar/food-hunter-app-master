import {StyleSheet} from 'react-native';
import {shadowStyle} from '../../../main/restaurant-card/styles';
import {scale, variables} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    borderRadius: scale(30),
    paddingHorizontal: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowStyle,
  },
  text: {
    fontWeight: 'bold',
    fontSize: variables.fontSize.mainRegular,
  },
});

export default styles;
