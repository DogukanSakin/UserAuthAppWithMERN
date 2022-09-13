import React from 'react';
import {Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
export default function DText({children, styles, overrideStyles, onPress}) {
  const tailwind = useTailwind();
  return (
    <Text
      onPress={onPress}
      style={[
        {...overrideStyles},
        styles ? tailwind(classNames(`${styles}`)) : null,
      ]}>
      {children}
    </Text>
  );
}
