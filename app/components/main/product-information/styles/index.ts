import {StyleSheet} from 'react-native';
import {scale, variables} from '../../../../theme/dimension';
import {color, textStyle} from '../../../../theme/color';

const paddingSize = scale(20);

const styles = StyleSheet.create({
  image: {
    height: 300,
    borderRadius: scale(30),
  },
  infoContainer: {
    paddingHorizontal: paddingSize,
    paddingTop: scale(10),
    paddingBottom: paddingSize,
    borderBottomWidth: scale(1),
    borderBottomColor: color.lightGrey,
  },
  actionContainer: {
    paddingHorizontal: paddingSize,
    paddingTop: paddingSize,
    paddingBottom: scale(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space: {
    marginBottom: scale(20),
  },
  description: {
    ...textStyle,
    marginTop: scale(20),
    fontSize: variables.fontSize.regular,
  },
  title: {
    ...textStyle,
    fontSize: variables.fontSize.extLarge,
    fontWeight: 'bold',
  },
  price: {
    ...textStyle,
    fontSize: variables.fontSize.large,
  },
  addButton: {
    color: color.white,
    paddingHorizontal: scale(30),
  },
  countContainer: {
    marginLeft: scale(20),
  },
});

export default styles;
