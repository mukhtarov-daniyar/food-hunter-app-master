import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';
import {containerPadding} from '../../home/styles';
import {scale, variables} from '../../../theme/dimension';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: color.whiteFoam,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: containerPadding,
  },
  listContent: {
    paddingVertical: scale(10),
  },
  buttonText: {
    color: color.white,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: color.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: containerPadding,
    paddingVertical: scale(15),
  },
  price: {
    fontSize: variables.fontSize.extLarge,
    fontWeight: 'bold',
    marginRight: scale(40),
  },
});

export default styles;
