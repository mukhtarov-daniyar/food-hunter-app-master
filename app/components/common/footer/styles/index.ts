import {StyleSheet} from 'react-native';
import {color} from '../../../../theme/color';
import {containerPadding} from '../../../../screens/home/styles';
import {scale} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: color.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: containerPadding,
    paddingVertical: scale(15),
    backgroundColor: color.white,
  },
});

export default styles;
