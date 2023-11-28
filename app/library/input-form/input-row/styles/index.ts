import {StyleSheet} from 'react-native';
import {scale} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginHorizontal: scale(5),
  },
  noLeftMargin: {
    marginLeft: 0,
  },
  noRightMargin: {
    marginRight: 0,
  },
});

export default styles;
