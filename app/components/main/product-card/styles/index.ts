import {StyleSheet} from 'react-native';
import {color} from '../../../../theme/color';
import {scale, variables} from '../../../../theme/dimension';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: scale(20),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    backgroundColor: color.white,
    marginBottom: scale(15),
  },
  noPadding: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  image: {
    width: scale(130),
    height: scale(100),
    borderRadius: scale(20),
  },
  infoContainer: {
    flex: 1,
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  title: {
    fontSize: variables.fontSize.mainRegular,
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  price: {
    fontSize: variables.fontSize.regularSmall,
  },
  quantity: {
    width: scale(100),
    marginTop: scale(10),
  },
});

export default styles;
