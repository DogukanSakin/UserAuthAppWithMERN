import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
export default function DButton({
  children,
  styles,
  overrideButtonContainerStyles,
  overrideButtonTextStyles,
  onPress,
}) {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      style={[
        {...overrideButtonContainerStyles},
        styles
          ? tailwind(
              classNames(
                `${styles} bg-[#F45FF8] items-center justify-center rounded-md p-3 my-2`,
              ),
            )
          : tailwind(
              classNames(
                'bg-[#F45FF8] items-center justify-center rounded-md p-3 my-2',
              ),
            ),
      ]}
      onPress={onPress}>
      <Text
        style={[
          {...overrideButtonTextStyles},
          tailwind(classNames('text-white')),
        ]}>
        {' '}
        {children}
      </Text>
    </TouchableOpacity>
  );
}
