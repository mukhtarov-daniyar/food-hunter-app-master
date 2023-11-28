import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../theme/color';
import {scale} from '../../../theme/dimension';
import Button from '../button';

const emptyIconSize = scale(40);

interface EmptyProps {
  text: string;
  buttonText?: string | null;
  onClick?: () => void;
}

const defaultEmptyText = 'No Data';

const Empty = ({text, buttonText, onClick}: EmptyProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name="file-tray-outline"
        size={emptyIconSize}
        color={color.brightRed}
      />
      <Text style={styles.text}>{text || defaultEmptyText}</Text>
      {buttonText && onClick ? (
        <View style={styles.buttonContainer}>
          <Button
            text={buttonText}
            color={color.brightRed}
            onClick={onClick}
            textStyle={styles.buttonText}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Empty;
