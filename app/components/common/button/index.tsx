import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import BaseLoader from '../base-loader';
import {color as themeColor} from '../../../theme/color';

interface Props {
  text: string;
  color: string | null;
  onClick: () => void;
  textStyle: any;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text,
  color,
  onClick,
  textStyle,
  fullWidth,
  isLoading,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: color ? color : themeColor.white,
          opacity: pressed ? 0.8 : 1,
        },
        styles.container,
        fullWidth ? {flex: 1} : null,
      ]}
      onPress={onClick}
      disabled={isLoading}>
      <>
        {isLoading ? (
          <BaseLoader loaderColor={themeColor.white} />
        ) : (
          <Text style={[styles.text, textStyle]}>{text}</Text>
        )}
      </>
    </Pressable>
  );
};

export default Button;
