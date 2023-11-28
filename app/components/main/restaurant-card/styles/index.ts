import {StyleSheet} from 'react-native';
import {color, textStyle} from '../../../../theme/color';
import {scale, variables} from '../../../../theme/dimension';

export const shadowStyle = {
  shadowColor: 'black',
  shadowOffset: {
    width: scale(3),
    height: scale(-1),
  },
  shadowOpacity: 0.1,
  shadowRadius: scale(7),
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: scale(20),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    backgroundColor: color.white,
    marginBottom: scale(15),
    ...shadowStyle,
  },
  image: {
    width: scale(130),
    height: scale(130),
    borderRadius: scale(20),
  },
  infoContainer: {
    flex: 1,
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  title: {
    ...textStyle,
    fontSize: variables.fontSize.mainRegular,
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  description: {
    ...textStyle,
    fontSize: variables.fontSize.regularSmall,
  },
});

export default styles;
