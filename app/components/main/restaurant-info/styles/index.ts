import {StyleSheet} from 'react-native';
import {scale, variables} from '../../../../theme/dimension';
import {textStyle} from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(10),
  },
  title: {
    ...textStyle,
    fontSize: variables.fontSize.extLarge,
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  description: {
    ...textStyle,
    marginLeft: scale(5),
    fontSize: variables.fontSize.mainRegular,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
