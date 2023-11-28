import {Dimensions, PixelRatio} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $scaleFactor: () => {
    if (PixelRatio.get() === 3.5) {
      return Math.round(PixelRatio.get());
    }

    return PixelRatio.get();
  },
  $fontScaleFactor: PixelRatio.getFontScale(),
  $scaling: 1,
  '@media (min-width: 800)': {
    $scaling: 1.5,
  },
});

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export const localWidth =
  screenWidth >= screenHeight ? screenHeight : screenWidth;
const widthRatio = localWidth / 390;

export const scale = (size: number) => widthRatio * size;

export const variables = {
  fontSize: {
    xxxSmall: (localWidth * 9) / 360,
    xxSmall: (localWidth * 10) / 360,
    xSmall: (localWidth * 11) / 360,
    smaller: (localWidth * 12) / 360,
    smallTwo: (localWidth * 12.5) / 360,
    small: (localWidth * 13) / 360,
    regularSmall: (localWidth * 14) / 360,
    regular: (localWidth * 15) / 360,
    mainRegular: (localWidth * 16) / 360,
    large: (localWidth * 17) / 360,
    extLarge: (localWidth * 20) / 360,
    extraLarge: (localWidth * 32) / 360,
  },
  shadowSmall: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
};
