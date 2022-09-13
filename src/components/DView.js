import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
export default function DView({children, styles, overrideStyles}) {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        {...overrideStyles},
        styles ? tailwind(classNames(`${styles}`)) : null,
      ]}>
      {children}
    </View>
  );
}
