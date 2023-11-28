import {StyleSheet} from 'react-native';
import {containerPadding} from '../../../../screens/home/styles';
import {scale} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  separator: {
    width: scale(13),
  },
  tags: {
    paddingHorizontal: containerPadding,
    paddingVertical: scale(20),
  },
  list: {
    flexGrow: 0,
  },
});

export default styles;
