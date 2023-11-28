import React from 'react';
import {ActivityIndicator} from 'react-native';
import {color} from '../../../theme/color';

interface Props {
  loaderColor?: string;
}

const BaseLoader = ({loaderColor}: Props) => {
  return (
    <ActivityIndicator size="large" color={loaderColor || color.brightRed} />
  );
};

export default BaseLoader;
