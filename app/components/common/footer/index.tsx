import React, {useEffect, useState} from 'react';
import styles from './styles';
import {LayoutRectangle, StyleProp, View, ViewStyle} from 'react-native';

const Footer = ({
  children,
  style,
  onLayout,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onLayout?: ({layout}: {layout: LayoutRectangle | null}) => void;
}) => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  useEffect(() => {
    if (onLayout && layout) {
      onLayout({layout});
    }
  }, [layout, onLayout]);

  return (
    <View
      style={[styles.container, style]}
      onLayout={({nativeEvent}) => setLayout(nativeEvent.layout)}>
      {children}
    </View>
  );
};

export default Footer;
