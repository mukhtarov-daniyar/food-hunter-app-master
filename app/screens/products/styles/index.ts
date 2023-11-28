import {StyleSheet} from 'react-native';
import {scale} from '../../../theme/dimension';
import {color} from '../../../theme/color';
import {containerPadding} from '../../home/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteFoam,
  },
  contentContainer: {},
  image: {
    height: scale(300),
    width: '100%',
  },
  card: {
    paddingHorizontal: containerPadding,
  },
  header: {
    backgroundColor: color.white,
    marginBottom: 10,
  },
  restaurantInfo: {
    paddingHorizontal: containerPadding,
  },
  cart: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
});

export default styles;
