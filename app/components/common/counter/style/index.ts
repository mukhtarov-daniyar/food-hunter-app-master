import {StyleSheet} from 'react-native';
import {scale, variables} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countButton: {
    padding: scale(10),
  },
  countText: {
    fontSize: variables.fontSize.large,
  },
  countNumber: {
    fontSize: variables.fontSize.large,
    paddingHorizontal: scale(10),
  },
});

export default styles;
